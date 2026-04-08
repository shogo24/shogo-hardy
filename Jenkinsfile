pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                echo 'Building the app...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- --watchAll=false'
            }
        }

    }
    
    post {
        success {
            echo 'Pipeline passed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}