pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node 3') {
                    agent {
                        label "remote_node3"
                    }
                    steps {
                        git credentialsId: 'jenkins', url: 'https://github.com/nikkovasay/cypressTest.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerLoginTest'
                    }
                }
                // stage('Slave Node 2') {
                //     agent {
                //         label "remote_node2"
                //     }
                //     steps {
                //         git credentialsId: 'jenkins', url: 'https://github.com/nikkovasay/cypressTest.git'
                //         bat 'npm install'
                //         bat 'npm update'
                //         bat 'npm run triggerTest'
                //     }
                // }
            }
        }
    }
}