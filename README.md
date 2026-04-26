# Weather DevOps App

A simple demo-safe Node.js + Express weather app focused on DevOps pipeline demonstration.

## Project Structure

- `server.js`
- `package.json`
- `Dockerfile`
- `Jenkinsfile`
- `README.md`
- `public/index.html`
- `k8s/deployment.yaml`
- `k8s/service.yaml`

## Features

- Express server on port `3000`
- `GET /` serves a basic HTML frontend
- `GET /api/weather?city=Bangalore` returns demo JSON weather data
- No API key required (always works with dummy data)

## LOCAL RUN

```bash
npm install
node server.js
```

Open: `http://localhost:3000`

## DOCKER

```bash
docker build -t weather-devops-app .
docker images
docker run -d -p 3000:3000 weather-devops-app
docker ps
```

Open: `http://localhost:3000`

## JENKINS

1. Open Jenkins dashboard.
2. Create a new item -> **Pipeline** job.
3. In pipeline configuration, choose:
   - **Pipeline script from SCM** (if repo is connected), or
   - **Pipeline script** and paste the content of `Jenkinsfile`.
4. Save and click **Build Now**.
5. Verify stages run in order:
   - Clone Repo
   - Install Dependencies
   - Build Docker Image
   - Show docker images
   - Run container

## KUBERNETES

```bash
minikube start
eval $(minikube docker-env)
docker build -t weather-devops-app:latest .
kubectl apply -f k8s/
kubectl get pods
kubectl get services
minikube service weather-devops-service
```

## API Demo Response

Request:

```bash
curl "http://localhost:3000/api/weather?city=Bangalore"
```

Response:

```json
{
  "city": "Bangalore",
  "temperature": "28°C",
  "status": "Sunny (Demo Data)"
}
```
