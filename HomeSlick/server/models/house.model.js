const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const HouseSchema = new mongoose.Schema({
    houseName: {
        type: String,
        required: [ true, "House name is required"],
        minlength: [3, "House name must be at least 3 characters"],
        unique: [true, "House name must be unique"],
        trim: true,
    },
    askingPrice: {
        type: Number,
        required: [ true, "Asking price is required"],
    },
    beds: {
        type: Number,
        required: [ true, "Number of beds is required"],
    },
    baths: {
        type: Number,
        required: [ true, "Number of baths is required"],
    },
    location: {
        type: String,
        required: [true, "House location is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [ true, "House description is required"],
        minlength: [3, "House description must be at least 3 characters"],
        trim: true,
    },
//"timestamps" adds updated at and created at when set to true
}, { timestamps: true });

HouseSchema.plugin(uniqueValidator, {message: 'House name must be unique'});
const House = mongoose.model("House", HouseSchema);

module.exports = House;
