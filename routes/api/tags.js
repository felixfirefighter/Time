const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Tag = require("../../models/Tag");

const validateTagInput = require("../../validation/tag");

// @route   GET api/tags
// @desc    get tags route
// @access  Public
router.get("/", (req, res) => {
  Tag.find()
    .sort({ name: 1 })
    .then(tags => res.json(tags))
    .catch(err => res.status(400).json({ noTagsFound: "No tags found" }));
});

// @route   GET api/tags/:id
// @desc    Get post by id
// @access  Public
// router.get("/:id", (req, res) => {
//   Tag.findById(req.params.id)
//     .then(tag => res.json(tag))
//     .catch(err =>
//       res.status(400).json({ noTagFound: "No tag found with that ID" })
//     );
// });

// @route   GET api/tags/:name
// @desc    Get post by name
// @access  Public
router.get("/:name", (req, res) => {
  Tag.findOne({ name: req.params.name })
    .then(tag => res.json(tag))
    .catch(err =>
      res.status(404).json({ noTagFound: "No tag found with that ID" })
    );
});

// @route   POST api/
// @desc    add new label
// @access  Public
// router.post('/', (req, res) => {
//   const {errors, isValid} = validateTagInput(req.body)
// });

// @route   DELETE api/
// @desc    delete a tag
// @access  Public
router.delete('/:id', (req, res) =>{
  Tag.findByIdAndRemove(req.params.id, (err, doc) =>{
    if (err) return res.status(404).json({ noTagFound: "No tag found." });

    return res.json(doc);
  })
});

module.exports = router;
