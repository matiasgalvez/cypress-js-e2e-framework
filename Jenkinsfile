pipeline {
  agent any

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  environment {
    TEST_ENV = 'qa'
    BASE_URL = 'https://the-internet.herokuapp.com'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }

    stage('Smoke Tests') {
      steps {
        sh 'npm run test:smoke'
      }
    }

    stage('Regression Tests') {
      when {
        branch 'main'
      }
      steps {
        sh 'npm run test:regression'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'reports/junit/*.xml'
      archiveArtifacts allowEmptyArchive: true, artifacts: 'reports/**, cypress/screenshots/**, cypress/videos/**'
    }
  }
}
