const mongoose = require('mongoose');
const LocationSchema = require('./../schemas/location_schema');
const LocationModel = mongoose.model('location', LocationSchema);

module.exports = LocationModel;