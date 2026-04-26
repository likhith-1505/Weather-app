const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/weather', (req, res) => {
  const city = (req.query.city || 'Bangalore').toString().trim() || 'Bangalore';

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
    updatedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Weather DevOps App Running on http://localhost:${PORT}`);
});
// trigger
// trigger
