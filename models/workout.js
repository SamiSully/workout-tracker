const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const virtuals = { toJSON: { virtuals: true } };
// Meow
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
  // virtuals,
  //   toJSON: {
  //     // include any virtual properties when data is requested
  //     virtuals: true,
  //   },
  // });
  // // adds a dynamically-created property to schema
  // workoutSchema.virtual("totalDuration").get(function () {
  //   // "reduce" array of exercises down to just the sum of their durations
  //   return this.exercises.reduce((total, exercise) => {
  //     return total + exercise.duration;
  //   }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
