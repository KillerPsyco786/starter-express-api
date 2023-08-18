const mongoose = require('mongoose');

const variableSchema = new mongoose.Schema({
    name: String,
    unit: String,
    value: Number,
    key: String
});

const machineSchema = new mongoose.Schema({
    UUID: String,
    name: String,
    variables: [variableSchema]
});

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;
