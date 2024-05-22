import {gql} from '@apollo/client'

export const ADD_TRAININGLOG = gql`
mutation addTrainingLog($logName: String!, $date: String!, $notes: String!) {
    addProgram(logName: $logName, date: $date, notes: $notes) {
        _id
        logName
        date
        notes
    }
  }
`;

export const UPDATE_TRAININGLOG = gql`
mutation updateTrainingLog($traininglogId: ID!, $logName: String!, $date: String!, $notes: String!) {
    updateTrainingLog(_id: $trainiglogId, logName: $logName, date: $date, notes: $notes) {
        _id
        logName
        date
        notes
    }
  }
`;

export const DELETE_TRAININGLOG = gql`
mutation removeTrainingLog($traininglogId: ID!) {
    removeTrainingLog(_id: $id) {
      _id
      logName
      date
      notes
    }
  }
`;