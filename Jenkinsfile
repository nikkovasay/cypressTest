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
                        git url 'https://github.com/nikkovasay/cypressTest.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerTest'
                    }
                }
                stage('Slave Node 2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url 'https://github.com/nikkovasay/cypressTest.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerTest'
                    }
                }
            }
        }
    }
}