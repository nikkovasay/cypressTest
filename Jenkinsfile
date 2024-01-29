pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node 1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git credentialsId: '28a7fbd1-bee7-4847-b5dd-c59db5459c46', url: 'https://github.com/nikkovasay/cypressTest.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerTest'
                    }
                }
            }
        }
    }
}