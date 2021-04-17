const router = require("express").Router();

const { Workout } = require("../models");

//get route
router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//put route
router.put("/workouts/:id", ({ params, body }, res) => {
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { workout: body } },
    { upsert: true, useFindandModify: false, new: true }
  )
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//post route
router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;