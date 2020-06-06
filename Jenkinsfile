pipeline {
  agent { label 'Ubuntu_TriveMe_01' }
  stages {
    stage ('Stage Checkout') {
      steps {
        checkout scm
      }
    }
    stage('install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('run build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
