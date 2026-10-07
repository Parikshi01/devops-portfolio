pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking project files...'
                bat 'dir'
            }
        }

        stage('Validate') {
            steps {
                echo 'Validating website files...'
                script {
                    if (!fileExists('index.html')) {
                        error('index.html not found')
                    }

                    if (!fileExists('style.css')) {
                        error('style.css not found')
                    }

                    if (!fileExists('script.js')) {
                        error('script.js not found')
                    }

                    if (!fileExists('Dockerfile')) {
                        error('Dockerfile not found')
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t devops-portfolio:%BUILD_NUMBER% .'
                bat 'docker tag devops-portfolio:%BUILD_NUMBER% devops-portfolio:latest'
            }
        }

        stage('Docker Test') {
            steps {
                echo 'Checking Docker image...'
                bat 'docker images devops-portfolio'
            }
        }
    }

    post {
        success {
            echo '========================================='
            echo 'PIPELINE SUCCESSFUL!'
            echo 'Docker image built successfully.'
            echo '========================================='
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}