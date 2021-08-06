const mongoose = require("mongoose")

const schema = mongoose.schema

const newExercise = new schema({
  name: { type: String },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number },
  duration: { type: Number },
  distance: { type: Number },
});

const Exercises = mongoose.model("Exercises", newExercise)

module.exports = Exercises;