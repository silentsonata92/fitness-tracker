const router = require("express").Router();
const Workout = require("../models").Workout;


router.get('/workouts', (req, res) => Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }
])
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then(workout => res.json(workout))
    .catch(err => res.json(err))
})

router.post("/workouts", (req, res) => {
  console.log('this workout has been created')
  Workout.create({
    day: Date.now(),
    exercises: req.body.exercises
  })
    .then(newWorkout => {
      console.log(newWorkout);
      res.json(newWorkout);
    })
    .catch(err => res.json(err));
});

router.get('/workouts/range', (req, res) => Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }
])
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))



module.exports = router;
