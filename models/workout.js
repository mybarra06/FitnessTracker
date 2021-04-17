const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        //type of exercise
        type: {
          type: String,
          trim: true,
          required: true,
        },
        //name of exercise
        name: {
          type: String,
          required: true,
          trim: true,
        },
        //how much weight
        weight: {
          type: Number,
        },
        //the sets
        sets: {
          type: Number,
        },
        //the reps
        reps: {
          type: Number,
        },
        //duration of exercise
        duration: {
          type: Number,
          required: true,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ExerciseSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", ExerciseSchema);

module.exports = Workout;