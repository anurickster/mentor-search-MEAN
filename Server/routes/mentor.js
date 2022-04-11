const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();
const Mentor = require('./../models/mentor');

// protect route: by isAuthenticatedUser middleware
router.get('/', async (req, res) => {
  let mentors = await Mentor.find();
  res.json(mentors);
});

router.get('/:id', async (req, res) => {
  let mentor = await Mentor.findById(req.params.id);
  res.json(mentor);
  console.log(req.params.id);
});

// protect route: by [isAuthenticatedUser, authorizeRoles('admin')]
router.post('/', async (req, res) => {
  // db and insert one mentor
  let mentor = await Mentor.create(req.body);
  res.status(201).json(mentor);
});

router.delete('/:id', async (req, res) => {
  // db and delete one mentor
  console.log(req.params.id);
  let result = await Mentor.findByIdAndDelete(req.params.id);
  console.log(result);
  res.json(result);
});

router.patch('/:id', async (req, res) => {
  // db and update one mentor
  let updatedMentor = await Mentor.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedMentor);
});

module.exports = router;
