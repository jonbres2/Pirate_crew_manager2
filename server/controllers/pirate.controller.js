const { response } = require("express");
const { model } = require("mongoose");
const { Pirate } = require("../models/pirate.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello world!"
    });
}

module.exports.createPirate = (req, res) => {
    const { name, position, treasures, image, catchPhrase, pegLeg, eyePatch, hookHand } = req.body;
    Pirate.create({
        name,
        position,
        treasures,
        image,
        catchPhrase,
        pegLeg,
        eyePatch,
        hookHand,
    })
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.findAllPirates = (req, res) => {
    Pirate.find({})
        .then(allPirates => res.json({ pirates: allPirates }))
        .catch(err => res.json({ message: "Error with retrieving all pirates", error: err }));
}

module.exports.findOnePirate = (req, res) => {
    Pirate.find({ _id: req.params.id })
        .then(onePirate => res.json({ pirate: onePirate }))
        .catch(err => res.json({ message: "Error with retrieving single pirate", error: err }));
}

module.exports.deletePirate = (req, res) => {
    Pirate.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Error with deleting Pirate", error: err }));
}

module.exports.editPirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPirate => res.json({ pirate: updatedPirate }))
        .catch(err => res.json({ message: "Error with editing pirate", error: err }));
}