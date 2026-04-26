pipeline {
  agent any

  stages {
    stage('Clone Repo') {
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
        sh 'docker build -t weather-devops-app .'
      }
    }

    stage('Show docker images') {
      steps {
        sh 'docker images'
      }
    }

    stage('Run container') {
      steps {
        sh 'docker stop weather-devops-container || true'
        sh 'docker rm weather-devops-container || true'
        sh 'docker run -d --name weather-devops-container -p 3000:3000 weather-devops-app || true'
      }
    }
  }
}
