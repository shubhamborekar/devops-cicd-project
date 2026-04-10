pipeline {
    agent any

    environment {
        APP_NAME = "devops-cicd-project"
        IMAGE_TAG = "${BUILD_NUMBER}"
        ECR_REPO = "737911104301.dkr.ecr.ap-south-1.amazonaws.com/devops-cicd-project"
        AWS_REGION = "ap-south-1"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shubhamborekar/devops-cicd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${ECR_REPO}:${IMAGE_TAG} ."
            }
        }

        stage('Login to ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login --username AWS --password-stdin 737911104301.dkr.ecr.ap-south-1.amazonaws.com
                """
            }
        }

        stage('Push to ECR') {
            steps {
                sh "docker push ${ECR_REPO}:${IMAGE_TAG}"
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh """
                kubectl set image deployment/devops-app \
                devops-app=${ECR_REPO}:${IMAGE_TAG}
                """
            }
        }
    }
}
