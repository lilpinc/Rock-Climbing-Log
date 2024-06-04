const { Climbs, TrainingLog, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        climbs: async () => {
            return await Climbs.find({});
        },
        climb: async (parent, { _id }) => {
            return await Climbs.findById(_id);
        },
        trainingLogs: async () => {
            return await TrainingLog.find({});
        },
        trainingLog: async (parent, { _id }) => {
            return await TrainingLog.findById(_id);
        },
        users: async () => {
            return await User.find({})
        },
        user: async (parent, { username}) => {
            return User.findOne({username});
        },
    },

    Mutation: {
        addClimb: async (parent, { climbName, grade, climbType, location, date, notes }) => {
            return Climbs.create({ climbName, grade, climbType, location, date, notes });
        },
        addTrainingLog: async (parent, { logName, date, notes }) => {
            return TrainingLog.create({ logName, date, notes });
        },
        addUser: async (parent, { username, email, password }) => {
            
            const user = await User.create({ username, email, password });
            
            const token = signToken(user);
           
            return { token, user };
          },
        updateClimb: async (parent, { _id, climbName, grade, climbType, location, date, notes }) => {
            return await Climbs.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        climbName,
                        grade,
                        climbType,
                        location,
                        date,
                        notes
                    }
                },
                { new: true }
            )
        },
        updateTrainingLog: async (parent, { _id, logName, date, notes }) => {
            return await TrainingLog.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        logName,
                        date,
                        notes
                    }
                },
                { new: true }
            )
        },
        updateUser: async (parent, { _id, username, password, email }) => {
            return User.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        username,
                        password,
                        email
                    }
                },
                { new: true }
            )
        },
        removeClimb: async (parent, { _id }) => {
            return await Climbs.findByIdAndDelete(_id);
        },
        removeTrainingLog: async (parent, { _id }) => {
            return await TrainingLog.findByIdAndDelete(_id);
        },
        removeUser: async (parent, { _id }) => {
            return User.findByIdAndDelete(_id);
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },

    }

};

module.exports = resolvers;