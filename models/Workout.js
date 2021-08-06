const { model, Schema } = require('mongoose')

const newWorkout = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: String,
      type: {
        type: String,
      },
      weight: Number,
      sets: Number,
      reps: Number,
      duration: Number,
      distance: Number
    }
  ]
})

const Workout = model("Workout", newWorkout)

module.exports = Workout


