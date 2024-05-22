import {gql} from '@apollo/client'

export const ADD_CLIMB = gql`
mutation addClimb($climbName: String!, $grade: String!, $location: String!, $date: String!, $notes: String!) {
    addClimb(climbName: $climbName, grade: $grade, location: $location, date: $date, notes: $notes) {
        _id
        climbName
        grade
        location
        date
        notes
    }
  }
`;

export const UPDATE_CLIMB = gql`
mutation updateClimb($climbName: String!, $grade: String!, $location: String!, $date: String!, $notes: String!) {
    updateClimb(climbName: $climbName, grade: $grade, location: $location, date: $date, notes: $notes) {
        _id
        climbName
        grade
        location
        date
        notes
    }
  }
`;

export const DELETE_CLIMB = gql`
mutation removeClimb($climbId: ID!) {
    removeClimb(_id: $id) {
        _id
        climbName
        grade
        location
        date
        notes
    }
  }
`;