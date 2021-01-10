var db = require("../models");

module.exports = function(app) {

    // use api.js to get the last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    })

    app.put("/api/workouts/:id", (req, res) => {
        var id = req.params.id
        db.Workout.update({_id:id}, {
            $push:{
                exercises: req.body
            }
        })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    })
    // route to get the workouts range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    })
    
}