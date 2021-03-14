const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        default: Date.now
    },
    exercises: 
        [{
            type: {
                type: String,
                trim: true,
                required: "Please select workout type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please input workout name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Please input workout duration"
            },
            distance: {
                type: Number,
                trim: true,
                required: "Please input workout duration"
            },
            weight: {
                type: Number,
                trim: true,
                required: "Please input weight used"
            },
            reps: {
                type: Number,
                trim: true,
                required: "Please input weight used"
            },
            sets: {
                type: Number,
                trim: true,
                required: "Please input weight used"
            }
        }
        ]
});
    


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;