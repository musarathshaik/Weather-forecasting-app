// server/api/weather.js
const express = require('express');
const router  = express.Router();
const Weather = require('../Weather');
const weather = new Weather();

// 1) GET /api/weather/:zip/:unit
//    — lets you test via browser/ curl
router.get('/:zip/:unit', async (req, res) => {
  const { zip, unit } = req.params;
  try {
    const data = await weather.getWeatherData(zip, unit);
    if (data.error) return res.status(400).json(data);

    await weather.saveWeatherDataToMongo(zip, data);
    return res.json(data);
  } catch (err) {
    console.error('GET /api/weather error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// 2) POST /api/weather
//    — matches exactly what your React app does (axios.post('/api/weather', {...}))
router.post('/', async (req, res) => {
  const { zip, unit } = req.body;
  if (!zip || !unit) {
    return res.status(400).json({ error: 'zip and unit are required in request body.' });
  }

  try {
    const data = await weather.getWeatherData(zip, unit);
    if (data.error) return res.status(400).json(data);

    await weather.saveWeatherDataToMongo(zip, data);
    return res.json(data);
  } catch (err) {
    console.error('POST /api/weather error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
