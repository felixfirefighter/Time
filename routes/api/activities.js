const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Activity = require("../../models/Activity");

const validateActivityInput = require("../../validation/activity");

// @route   GET api/activities
// @desc    Get activities
// @access  Private
router.get("/", (req, res) => {
  Activity.find()
    .then(activities => res.json(activities))
    .catch(err =>
      res.status(404).json({ noActivitiesFound: "No activities found." })
    );
});

// @route   POST api/activities
// @desc    Create activity
// @access  Private
router.post("/", (req, res) => {
  const { errors, isValid } = validateActivityInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { title, description, startDate, endDate } = req.body;

  const newActivity = new Activity({
    title,
    description,
    startDate,
    endDate
  });

  newActivity.save().then(activity => res.json(activity));
});

// @route   DELETE api/activities/:id
// @desc    Delete activity
// @access  Private
router.delete("/:id", (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => {
      activity.remove().then(() => res.json({ success: true }));
    })
    .catch(err =>
      res.status(404).json({ noActivityFound: "No activity found." })
    );
});

module.exports = router;
