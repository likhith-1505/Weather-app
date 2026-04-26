pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t weather-devops-app:latest .'
      }
    }

    stage('Show Docker Images') {
      steps {
        sh 'docker images | grep weather-devops-app || true'
      }
    }

    stage('Stop Old Container') {
      steps {
        sh 'docker stop weather-devops-container || true'
        sh 'docker rm weather-devops-container || true'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }

    stage('Verify Deployment') {
      steps {
        sh 'kubectl get pods'
        sh 'kubectl get services'
      }
    }
  }
}
