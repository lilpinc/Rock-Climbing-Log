import {gql} from '@apollo/client'

export const ADD_TRAININGLOG = gql`
mutation addTrainingLog($logName: String!, $date: String!, $notes: String!) {
    addTrainingLog(logName: $logName, date: $date, notes: $notes) {
        _id
        logName
        date
        notes
    }
  }
`;

export const UPDATE_TRAININGLOG = gql`
mutation updateTrainingLog($id: ID!, $logName: String!, $date: String!, $notes: String!) {
    updateTrainingLog(_id: $id, logName: $logName, date: $date, notes: $notes) {
        _id
        logName
        date
        notes
    }
  }
`;

export const DELETE_TRAININGLOG = gql`
mutation removeTrainingLog($id: ID!) {
    removeTrainingLog(_id: $id) {
      _id
      logName
      date
      notes
    }
  }
`;