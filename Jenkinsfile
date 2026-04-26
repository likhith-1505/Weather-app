pipeline {
  agent any

  environment {
    KUBECONFIG = '/var/lib/jenkins/.kube/config'
  }

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

    stage('Ensure Minikube Running') {
      steps {
        sh 'minikube status || true'
        sh 'minikube start --driver=docker || true'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl get nodes'
        sh 'kubectl cluster-info'
        sh 'kubectl apply -f k8s/ --validate=false'
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
