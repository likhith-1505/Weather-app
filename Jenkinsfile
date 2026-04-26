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

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          export KUBECONFIG=/var/lib/jenkins/.kube/config
          sleep 5
          kubectl get nodes
          kubectl apply -f k8s/ --validate=false
        '''
      }
    }

    stage('Verify Deployment') {
      steps {
        sh '''
          export KUBECONFIG=/var/lib/jenkins/.kube/config
          kubectl get pods
          kubectl get services
        '''
      }
    }
  }
}
