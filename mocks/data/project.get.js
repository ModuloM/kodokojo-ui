/* eslint-disable quotes */

exports.controller = function(req, res, next) {
  console.log('call to project GET', req.params)

  var projectId = req.params.id

  var project
  if (projectId === '000-stackstate-projectId') {
    project = {
      "identifier": `${projectId}`,
      "projectConfigurationIdentifier": "000-stackstate-projectConfigId",
      "name": "jpascal",
      "snapshotDate": "May 16, 2016 1:31:26 PM",
      "stacks": [
        {
          "name": "build-A",
          "stackType": "BUILD",
          "brickStates": [
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "CI",
              "stackName": "build-A",
              "brickName": "jenkins",
              "state": "UNKNOWN",
              "version": "1.651",
              "url": "https://ci-jpascal.kodokojo.io"
            },
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "REPOSITORY",
              "stackName": "build-A",
              "brickName": "nexus",
              "state": "UNKNOWN",
              "version": "2",
              "url": "https://repository-jpascal.kodokojo.io"
            },
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "SCM",
              "stackName": "build-A",
              "brickName": "gitlab",
              "state": "UNKNOWN",
              "version": "8.5.2-ce",
              "url": "https://scm-jpascal.kodokojo.io"
            }
          ]
        }
      ]
    }
  } else {
    project = {
      "identifier": `${projectId}`,
      "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
      "name": "jpascal",
      "snapshotDate": "May 16, 2016 1:31:26 PM",
      "stacks": [
        {
          "name": "build-A",
          "stackType": "BUILD",
          "brickStates": [
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "CI",
              "stackName": "build-A",
              "brickName": "jenkins",
              "state": "RUNNING",
              "version": "1.651",
              "url": "https://ci-jpascal.kodokojo.io"
            },
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "REPOSITORY",
              "stackName": "build-A",
              "brickName": "nexus",
              "state": "RUNNING",
              "version": "2",
              "url": "https://repository-jpascal.kodokojo.io"
            },
            {
              "projectConfigurationIdentifier": "1e25e0ca2fc382f332be16f1342d152eacedb434",
              "brickType": "SCM",
              "stackName": "build-A",
              "brickName": "gitlab",
              "state": "RUNNING",
              "version": "8.5.2-ce",
              "url": "https://scm-jpascal.kodokojo.io"
            }
          ]
        }
      ]
    }
  }

  res.contentType = 'application/json'
  res.send(200, JSON.stringify(project))
  next()
}