const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Event = require("../../models/Event");
const Tag = require("../../models/Tag");

const validateEventInput = require("../../validation/event");

// @route   GET api/events
// @desc    Get events
// @access  Private
router.get("/", (req, res) => {
  Event.find()
    .populate("tag", ["name", "color"])
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noEventsFound: "No events found." }));
});

// @route   POST api/events
// @desc    Create event
// @access  Private
router.post("/", (req, res) => {
  const { errors, isValid } = validateEventInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { title, desc, start, end, name, color } = req.body;

  // find tag with name and color
  Tag.findOne({
    name
  })
    .then(tag => {
      // add a new tag if the tag cannot be found
      if (!tag) {
        const newTag = new Tag({
          name,
          color
        });

        //save the tag
        newTag.save().then(tag => {
          //add event
          const newEvent = new Event({
            title,
            desc,
            start,
            end,
            tag: tag._id
          });

          newEvent.save().then(event => res.json(event));
        });
      } else {
        // tag exists, assign id to tagId
        const newEvent = new Event({
          title,
          desc,
          start,
          end,
          tag: tag._id
        });

        newEvent.save().then(event => res.json(event));
      }
    })
    .catch(err => res.status(400).json("Unable to add tag"));
});

// @route   POST api/events
// @desc    Update event
// @access  Private
router.post("/:id", (req, res) => {
  const { errors, isValid } = validateEventInput(req.body);

  const { title, start, end, name, color } = req.body;

  // find tag with name
  Tag.findOne({ name })
    .then(tag => {
      // add a new tag if the tag cannot be found
      if (!tag) {
        const newTag = new Tag({
          name,
          color
        });

        //save the tag
        newTag.save().then(tag => {
          //update event
          Event.findByIdAndUpdate(
            req.params.id,
            { title, start, end, tag: tag._id },
            { new: true },
            (err, doc) => {
              if (err)
                return res
                  .status(400)
                  .json({ updateEventFailed: "Unable to update event" });

              return res.json(doc);
            }
          );
        });
      } else {
        // tag exists, assign id to tagId
        Event.findByIdAndUpdate(
          req.params.id,
          { title, start, end, tag: tag._id },
          { new: true },
          (err, doc) => {
            if (err)
              return res
                .status(400)
                .json({ updateEventFailed: "Unable to update event" });

            return res.json(doc);
          }
        );
      }
    })
    .catch(err => res.status(400).json("Unable to add tag"));
});

// @route   DELETE api/events/:id
// @desc    Delete event
// @access  Private
router.delete("/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, doc) => {
    if (err) return res.status(404).json({ noEventFound: "No event found." });

    return res.json(doc);
  });
});

module.exports = router;
