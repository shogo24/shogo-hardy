pipeline {
    agent {
        docker {
            image 'node:24.14.0.alpine'
            reuseNode true
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