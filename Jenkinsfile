pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list --reporter="junit"
          npx playwright test
        '''
      }
      post {
        success {
          sh '''
            curl -v -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiI2Yjk0NmNmOC0yZjgyLTM2ZjgtODg0ZS03NjQ5NTJlMjY5MTgiLCJhY2NvdW50SWQiOiI2MzNhY2U5MDdmODVmMTY3NzdhMTZkOWQiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTcwMjkxMDQ3NywiZXhwIjoxNzAyOTk2ODc3LCJhdWQiOiI4MkNGQTc1QTBCMEY0QTc2OTNEOTc1OUI3MjM1RjM1RiIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IjgyQ0ZBNzVBMEIwRjRBNzY5M0Q5NzU5QjcyMzVGMzVGIn0.S1ETt3QbT1-qhIGQzlzhYAP6_vynmsRV1hJYSvCPxW8"  --data @"xray-report.xml" "https://xray.cloud.getxray.app/api/v2/import/execution/junit?projectKey=TSHRSTD&testPlanKey=TSHRSTD-707"
          '''
        }
      }
    }
  }
}
