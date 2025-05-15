const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    zipCode: { type: String, required: true },
    data: { type: Object, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);
