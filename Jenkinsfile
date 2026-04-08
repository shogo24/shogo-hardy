pipeline {
    agent {
        docker {
            image 'shogoha/jenkins-node-netlify:latest'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}