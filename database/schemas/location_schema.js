const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema ({
    place: {
        type: String,
        required: true
    }
});

module.exports = LocationSchema;