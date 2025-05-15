import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "../Stylesheets/WeatherForm.scss";

function WeatherForm() {
    const [zipCode, setZipCode] = useState("");
    const [tempMetric, setTempMetric] = useState("imperial");
    const dispatch = useDispatch();

    const getWeather = async (e) => {
        e.preventDefault();

        if (!zipCode) return alert("Please enter a zip code.");

        try {
            localStorage.setItem("tempMetric", tempMetric);

            const response = await axios.post("/api/weather", { zipCode, tempMetric });
            dispatch({ type: "SET_WEATHER", payload: response.data });
        } catch (error) {
            console.error("Failed to fetch weather:", error);
            alert("Could not get weather data. Please check the zip code.");
        }
    };

    return (
        <form className="weather-form" onSubmit={getWeather}>
            <input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <select value={tempMetric} onChange={(e) => setTempMetric(e.target.value)}>
                <option value="imperial">Fahrenheit (°F)</option>
                <option value="metric">Celsius (°C)</option>
            </select>
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default WeatherForm;
