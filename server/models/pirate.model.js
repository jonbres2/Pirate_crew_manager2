const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    position: {
        type: String,
        required: [true, "Position is required!"]
    },
    treasures: {
        type: Number,
        required: [true, "Treasure count is required!"]
    },
    image: {
        type: String,
        required: [true, "Image URL is required!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is required!"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Peg Leg status is required!"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye Patch status is required!"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Hook Hand status is required!"]
    },
}, {timestamps: true});

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);