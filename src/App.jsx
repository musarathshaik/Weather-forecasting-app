import React, { useState } from "react";
import axios from "axios";
import "./Stylesheets/App.scss";

function App() {
  const [zip, setZip] = useState("");
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    try {
      // POST to our express route
      const res = await axios.post("/api/weather", { zip, unit });
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="app">
      <h2 className="sub-title">Hello Sunshine!</h2>


      <form onSubmit={handleFetch} className="form">
        <input
          type="text"
          placeholder="ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="metric">Celsius (°C)</option>
          <option value="imperial">Fahrenheit (°F)</option>
        </select>

        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name} ({weather.sys.country})
          </h2>
          <p className="desc">
            {weather.weather[0].description}
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </p>
          <ul>
            <li>
              🌡️ Temp: {weather.main.temp}°
              {unit === "metric" ? "C" : "F"}
            </li>
            <li>
              🤔 Feels like: {weather.main.feels_like}°
              {unit === "metric" ? "C" : "F"}
            </li>
            <li>💧 Humidity: {weather.main.humidity}%</li>
            <li>🌬️ Wind: {weather.wind.speed}{" "}
              {unit === "metric" ? "m/s" : "mph"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
