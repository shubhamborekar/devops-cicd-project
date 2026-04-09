pipeline {
    agent any

    environment {
        APP_NAME = "devops-cicd-project"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shubhamborekar/devops-cicd-project.git'
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${APP_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('List Docker Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
