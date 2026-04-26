# WeatherHub - Real-Time Weather Dashboard

A production-ready Node.js + Express weather application with a modern responsive UI, built for DevOps pipeline demonstration. Features a complete weather dashboard with 5-day forecast, dark mode, search history, and demo-safe API.

![Weather App](https://img.shields.io/badge/Status-Production%20Ready-brightgreen) ![Node.js](https://img.shields.io/badge/Node-18+-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🎯 Project Overview

WeatherHub is a full-stack weather application designed to demonstrate:
- **Code**: Modern JavaScript/HTML/CSS frontend with Express backend
- **CI/CD**: Jenkins pipeline automation
- **Containerization**: Docker image building and deployment
- **Orchestration**: Kubernetes manifests for production deployment

## ✨ Features

### 🌤️ Current Weather
- Real-time weather display with city and country
- Large temperature display
- Weather condition with matching emoji icons
- Last updated timestamp
- Feels like temperature
- Humidity, wind speed, pressure, visibility metrics

### 📅 5-Day Forecast
- Horizontal scrollable forecast cards
- Daily temperature and condition predictions
- Weather emoji for quick visual reference
- Smooth scroll behavior

### 🔍 Search & History
- Search any city instantly
- Recent search history (up to 8 cities)
- Click history to quickly re-fetch
- Persistent storage (localStorage)

### 🌙 Dark/Light Mode
- Modern theme toggle
- Automatic theme persistence
- Glassmorphism UI design
- Smooth transitions

### 📱 Responsive Design
- Desktop, tablet, and mobile optimized
- Flexible grid layouts
- Touch-friendly buttons
- Adaptive font sizes

### ⚡ Performance
- Lightweight (~25KB gzipped)
- Fast API responses
- No external dependencies (frontend)
- Optimized animations

### 🔒 Demo-Safe
- No API keys required
- Always works with dummy data
- Fallback for location errors
- Error handling & user feedback

## 📁 Project Structure

```
weather-devops-app/
├── server.js              # Express backend
├── package.json          # Node dependencies
├── Dockerfile            # Docker image definition
├── Jenkinsfile           # CI/CD pipeline
├── .gitignore           # Git ignore rules
├── README.md            # This file
├── public/
│   └── index.html       # React-free weather dashboard
└── k8s/
    ├── deployment.yaml  # Kubernetes deployment
    └── service.yaml     # Kubernetes service
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Docker
- (Optional) Docker for containerization
- (Optional) Kubernetes + Minikube for orchestration
- (Optional) Jenkins for CI/CD

### Local Development

```bash
# Install dependencies
npm install

# Start server (runs on port 3000)
node server.js

# Open browser
open http://localhost:3000
```

### Docker Deployment

```bash
# Build image
docker build -t weather-devops-app .

# Verify image
docker images | grep weather-devops-app

# Run container
docker run -d -p 3000:3000 --name weather-app weather-devops-app

# Check running containers
docker ps

# Stop container
docker stop weather-app

# Remove container
docker rm weather-app
```

Visit: `http://localhost:3000`

## ☸️ Kubernetes Deployment

```bash
# Start minikube
minikube start

# Set Docker environment for minikube
eval $(minikube docker-env)

# Build image in minikube
docker build -t weather-devops-app:latest .

# Apply manifests
kubectl apply -f k8s/

# Verify deployment
kubectl get deployments
kubectl get pods
kubectl get services

# Access service
minikube service weather-devops-service

# View logs
kubectl logs -f deployment/weather-devops-deployment

# Clean up
kubectl delete -f k8s/
minikube stop
```

## 🔄 Jenkins CI/CD Pipeline

### Pipeline Stages
1. **Clone Repo** - Checkout source code
2. **Install Dependencies** - Run `npm install`
3. **Build Docker Image** - Create container image
4. **Show docker images** - List built images
5. **Run container** - Start container on port 3000

### Setup Instructions
1. Open Jenkins dashboard
2. Create new **Pipeline** job
3. Choose configuration method:
   - **Pipeline script from SCM**: Point to this repository
   - **Pipeline script**: Paste `Jenkinsfile` content
4. Save and click **Build Now**
5. Monitor build progress in logs

### Jenkinsfile Structure
```groovy
pipeline {
  agent any
  stages {
    stage('Clone Repo') { ... }
    stage('Install Dependencies') { ... }
    stage('Build Docker Image') { ... }
    stage('Show docker images') { ... }
    stage('Run container') { ... }
  }
}
```

The pipeline includes `|| true` safeguards to prevent failures if containers already exist.

## 🌐 API Documentation

### Current Weather
**Endpoint**: `GET /api/weather?city=<city_name>`

**Request**:
```bash
curl "http://localhost:3000/api/weather?city=Bangalore"
```

**Response**:
```json
{
  "city": "Bangalore",
  "country": "IN",
  "temperature": "28°C",
  "feelsLike": "30°C",
  "condition": "Sunny",
  "humidity": "62%",
  "windSpeed": "12 km/h",
  "pressure": "1012 hPa",
  "visibility": "10 km",
  "updatedAt": "2026-04-26T14:30:00.000Z",
  "forecast": [
    {
      "day": "Mon",
      "temp": "28°C",
      "condition": "Sunny"
    },
    {
      "day": "Tue",
      "temp": "27°C",
      "condition": "Cloudy"
    },
    {
      "day": "Wed",
      "temp": "29°C",
      "condition": "Rainy"
    },
    {
      "day": "Thu",
      "temp": "30°C",
      "condition": "Windy"
    },
    {
      "day": "Fri",
      "temp": "28°C",
      "condition": "Partly Cloudy"
    }
  ]
}
```

### Root Endpoint
**Endpoint**: `GET /`

Returns the HTML weather dashboard UI.

## 📊 Demo Commands

### Test Weather API
```bash
# Bangalore
curl -s "http://localhost:3000/api/weather?city=Bangalore" | jq .

# Multiple cities
for city in London Paris Tokyo Sydney; do
  echo "🏙️ $city:"
  curl -s "http://localhost:3000/api/weather?city=$city" | jq '.city, .temperature'
done
```

### Docker Quick Demo
```bash
# Build, run, and test
docker build -t weather-devops-app . && \
docker run -d -p 3000:3000 weather-devops-app && \
sleep 2 && \
curl -s http://localhost:3000/api/weather?city=Mumbai | jq .
```

### Kubernetes Demo
```bash
# Deploy to Kubernetes
minikube start && \
eval $(minikube docker-env) && \
docker build -t weather-devops-app:latest . && \
kubectl apply -f k8s/ && \
kubectl rollout status deployment/weather-devops-deployment && \
minikube service weather-devops-service
```

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: Vanilla HTML5 + CSS3 + JavaScript (No frameworks)
- **Containerization**: Docker + Dockerfile
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins
- **Version Control**: Git + GitHub
- **API**: RESTful JSON responses

## ⚙️ Configuration

### Environment Variables
Currently demo-safe with no configuration needed. All endpoints return mock data.

Optional (for future enhancements):
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Development

### Adding Real Weather Data
Replace dummy data in `server.js` `/api/weather` route:
```javascript
// Replace this section with real API calls
const response = await fetch(`https://api.weather...`);
const realData = await response.json();
```

### Customizing UI
Edit `public/index.html` styles or JavaScript:
- CSS variables in `:root` for quick theming
- Forecast cards in `.forecast-container`
- Weather emoji mapping in `getWeatherIcon()` function

### Building for Production
```bash
# Minify frontend
npm install -g terser
terser public/index.html -o public/index.min.html

# Build optimized Docker image
docker build --no-cache -t weather-devops-app:latest .
```

## 🧪 Testing

### Manual Testing
1. Open http://localhost:3000
2. Search different cities
3. Toggle dark mode
4. Check search history persistence
5. Refresh forecast data
6. Test responsive design (DevTools)

### API Testing
```bash
# Test current endpoint
curl http://localhost:3000/

# Test weather API with different cities
curl "http://localhost:3000/api/weather?city=City"

# Test error handling
curl "http://localhost:3000/api/invalid"
```

## 📦 Deployment Checklist

- [ ] Code commits to GitHub
- [ ] Docker image builds successfully
- [ ] Jenkins pipeline runs all 5 stages
- [ ] Container runs on port 3000
- [ ] Weather API returns forecast data
- [ ] UI loads with all features
- [ ] Dark mode persists
- [ ] Search history saves
- [ ] Kubernetes manifests deploy
- [ ] kubectl services accessible
- [ ] Minikube service navigation works

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# macOS/Linux
sudo lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Or change port in server.js
```

### Docker Build Fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild
docker build -t weather-devops-app .
```

### Kubernetes Pod Not Running
```bash
# Check pod status
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>

# Delete and recreate
kubectl delete -f k8s/
kubectl apply -f k8s/
```

## 📄 License

MIT License - Feel free to use for learning and DevOps demonstrations.

## 🤝 Contributing

This is a demo project. For improvements or bug reports, please create an issue.

## 📬 Contact & Support

For DevOps reviews or deployment questions, refer to:
- README.md - This file
- API documentation above
- Code comments in `server.js` and `public/index.html`
- Dockerfile for container setup
- Jenkinsfile for CI/CD pipeline
- k8s/ folder for Kubernetes manifests
