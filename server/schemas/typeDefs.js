module.exports = `
type Climbs {
    _id:ID
    climbName: String
    grade: String
    climbType: String
    location: String
    date: String
    notes: String
}

type TrainingLog {
    _id:ID
    logName: String
    date: String
    notes: String
}

type Query {
    climbs: [Climbs]!
    trainingLogs: [TrainingLog]!
    climb(_id: ID!) : Climbs
    trainingLog(_id: ID!): TrainingLog
}

type Mutation{
    addClimb (climbName: String!, grade: String!, climbType: String!, location: String!, date: String!, notes: String!): Climbs
    addTrainingLog (logName: String!, date: String!, notes: String!): TrainingLog
    removeClimb (_id: ID!): Climbs
    removeTrainingLog (_id: ID!): TrainingLog
    updateClimb (_id:ID!, climbName: String!, grade: String!, climbType: String!, location: String!, date: String!, notes: String): Climbs
    updateTrainingLog (_id: ID!, logName: String!, date: String!, notes: String!): TrainingLog
}
   
`