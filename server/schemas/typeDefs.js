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

type User{
    _id:ID
    username: String
    password: String
    email: String
}

type Auth{
    token: ID!
    user: User
}

type Response{
    success: Boolean!
    message: String!
}


type Query {
    climbs: [Climbs]!
    trainingLogs: [TrainingLog]!
    climb(_id: ID!) : Climbs
    trainingLog(_id: ID!): TrainingLog
    users: [User]!
    user(_id: ID!): User
}

type Mutation{
    addClimb (climbName: String!, grade: String!, climbType: String!, location: String!, date: String!, notes: String!): Climbs
    addTrainingLog (logName: String!, date: String!, notes: String!): TrainingLog
    addUser(username: String!, password:String!, email: String!): User
    removeClimb (_id: ID!): Climbs
    removeTrainingLog (_id: ID!): TrainingLog
    removeUser(_id: ID!): User
    updateClimb (_id:ID!, climbName: String!, grade: String!, climbType: String!, location: String!, date: String!, notes: String): Climbs
    updateTrainingLog (_id: ID!, logName: String!, date: String!, notes: String!): TrainingLog
    updateUser(_id: ID!, username: String!, password:String!, email: String!): User
    login(email: String!, password:String!): Auth
    resetPassword(_id: ID!, password:String!, email:String!): User
    forgotPassword(email:String!): Response
}

   
`