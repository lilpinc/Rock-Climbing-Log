import {gql} from '@apollo/client'

export const QUERY_CLIMBS = gql`
query climbs {
    climbs {
        _id
        climbName
        grade
        location
        date
        notes
    }
}
`;

export const QUERY_CLIMB = gql`
query climb($id: ID!) {
    climb(_id: $id) {
        _id
        climbName
        grade
        location
        date
        notes
    }
}`;