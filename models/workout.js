const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter exercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter exercise duration in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
    , {
        toObject: {
        virtuals: true
        },
        toJSON: {
        virtuals: true 
        }
      }
);
// this is to create a property for the virtual to be part of the schema
workoutSchema
.virtual('totalDuration')
.get(function () {
    let totalDuration = 0;
    for(var i=0; i < this.exercises.length; i++){
        totalDuration = totalDuration + this.exercises[i].duration;
    }
  return totalDuration; 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;