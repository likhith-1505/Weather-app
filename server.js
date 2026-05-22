const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// demo
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/weather', (req, res) => {
  const city = (req.query.city || 'Bangalore').toString().trim() || 'Bangalore';

  const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Partly Cloudy'];
  const temperatures = [28, 27, 29, 30, 28];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const forecast = days.map((day, idx) => ({
    day,
    temp: `${temperatures[idx]}°C`,
    condition: conditions[idx]
  }));

  res.json({
    city,
    country: 'IN',
    temperature: '28°C',
    feelsLike: '30°C',
    condition: 'Sunny',
    humidity: '62%',
    windSpeed: '12 km/h',
    pressure: '1012 hPa',
    visibility: '10 km',
    forecast,
    updatedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Weather DevOps App Running on http://localhost:${PORT}`);
});
// trigger
