const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

// router to find the workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router to post the workouts to the page
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router to retreive the exercises
router.get("/api/exercises", (req, res) => {
  db.Exercise.find({})
    .then((foundExercises) => {
      res.json(foundExercises);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router to put the exercises in by their id
router.put("/api/exercises", (req, res) => {
  db.Exercise.findByIDAndUpdate(
    req.params.id,
    {
      $push: { exercise: req.body },
    },
    { new: true }
  )
    .then((placeExercises) => {
      res.json(placeExercises);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
