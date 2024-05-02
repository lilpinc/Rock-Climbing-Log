module.exports = `
type Climbs {
    _id:ID
    climbName: String
    grade: String
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
    traininglogs: [TrainingLog]!
    climb(climbId: ID!) : Climbs
    traininglog(traininglogId: ID!): TrainingLog
}

type Mutation{
    addClimb (climbName: String!, grade: String!, location: String!, date: String!, notes: String!): Climbs
    addTrainingLog (logName: String!, date: String!, notes: String!): TrainingLog
    removeClimb (climbId: ID!): Climbs
    removeTrainingLog (traininglogId: ID!): TrainingLog
    updateClimb (climbId:ID!, climbName: String!, grade: String!, location: String!, date: String!, notes: String): Climbs
    updateTrainingLog (traininglogId: ID!, logName: String!, date: String!, notes: String!): TrainingLog
}
   
`