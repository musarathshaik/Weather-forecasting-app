import React from "react";
import { useSelector } from "react-redux";
import "../Stylesheets/WeatherInfoPanel.scss";

function WeatherInfoPanel() {
    const weatherData = useSelector((state) => state.weather);

    const getMetricSymbol = () => {
        const metric = localStorage.getItem("tempMetric") || "";
        return metric.includes("metric") ? "°C" : "°F";
    };

    const metricSymbol = getMetricSymbol();

    if (!weatherData || !weatherData.main || !weatherData.weather) {
        return <section>Enter a ZIP code to see weather info.</section>;
    }

    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    return (
        <section className="weather-info">
            <h3 className="city-name">{weatherData.name}</h3>

            <section className="overcast">
                <img src={iconUrl} className="overcast-img" alt="Weather icon" />
                <span className="overcast-description">{weatherData.weather[0].description}</span>
            </section>

            <hr />

            <section className="current-weather">
                <span className="humidity">Humidity: {weatherData.main.humidity}%</span>
                <span className="curr-temp">Temp: {weatherData.main.temp}{metricSymbol}</span>
                <span className="feels-like">Feels like: {weatherData.main.feels_like}{metricSymbol}</span>
            </section>

            <hr />

            <section className="temps">
                <span className="min-temp">Low: {weatherData.main.temp_min}{metricSymbol}</span>
                <span className="max-temp">High: {weatherData.main.temp_max}{metricSymbol}</span>
            </section>
        </section>
    );
}

export default WeatherInfoPanel;
