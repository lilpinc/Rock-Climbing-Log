const { Climbs, TrainingLog } = require('../models');

const resolvers = {
    Query: {
        climbs: async () => {
            return await Climbs.find({});
        },
        climb: async (parent, { _id }) => {
            return await Climbs.findById( _id);
        },
        traininglogs: async () => {
            return await TrainingLog.find({});
        },
        traininglog: async (parent, { _id }) => {
            return await TrainingLog.findById( _id);
        },
    },

    Mutation: {
        addClimb: async (parent, { climbName, grade, location, date, notes }) => {
            return Climbs.create({ climbName, grade, location, date, notes });
        },
        addTrainingLog: async (parent, { logName, date, notes }) => {
            return TrainingLog.create({ logName, date, notes });
        },
        updateClimb: async (parent, { _id, climbName, grade, location, date, notes }) => {
            return await Climbs.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        climbName,
                        grade,
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
        removeClimb: async (parent, { _id }) => {
            return await Climbs.findByIdAndDelete(_id);
        },
        removeTrainingLog: async (parent, { _id }) => {
            return await TrainingLog.findByIdAndDelete(_id);
        }

    }

};

module.exports = resolvers;