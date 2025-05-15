const axios = require('axios');
const WeatherModel = require('./models/Weather');

class Weather {
    constructor() {
        this.apiKey = process.env.OPEN_WEATHER_API_KEY;
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeatherData(zipCode, tempMetric, countryCode = "us") {
        try {
            const url = `${this.baseUrl}?zip=${zipCode},${countryCode}&units=${tempMetric}&appid=${this.apiKey}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching weather data:", error.response?.data || error.message);
            return { error: "Could not fetch weather data." };
        }
    }

    async saveWeatherDataToMongo(zipCode, data) {
        try {
            const newWeather = new WeatherModel({
                zip: zipCode,
                ...data,
            });
            await newWeather.save();
        } catch (error) {
            console.error("Error saving to Mongo:", error.message);
        }
    }
}

module.exports = Weather;
