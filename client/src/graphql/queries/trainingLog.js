import {gql} from '@apollo/client'

export const QUERY_TRAININGLOGS = gql`
query trainingLogs {
    trainingLogs {
        _id
        logName
        date
        notes
    }
}
`;

export const QUERY_TRAININGLOG = gql`
query trainingLog($id: ID!) {
    trainingLog(_id: $id) {
        _id
        logName
        date
        notes
    }
}`;