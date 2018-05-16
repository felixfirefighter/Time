const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Event = require("../../models/Event");

const validateEventInput = require("../../validation/event");

// @route   GET api/events
// @desc    Get events
// @access  Private
router.get("/", (req, res) => {
  Event.find()
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

  const { title, desc, start, end } = req.body;

  const newEvent = new Event({
    title,
    desc,
    start,
    end
  });

  newEvent.save().then(event => res.json(event));
});

// @route   DELETE api/events/:id
// @desc    Delete event
// @access  Private
router.delete("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ noEventFound: "No event found." }));
});

module.exports = router;
