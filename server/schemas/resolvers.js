const { Climbs, TrainingLog } = require('../models');

const resolvers = {
    Query: {
        climbs: async () => {
            return await Climbs.find({});
        },
        climb: async (parent, { climbId }) => {
            return await Climbs.findOne({ _id: climbId });
        },
        traininglogs: async () => {
            return await TrainingLog.find({});
        },
        traininglog: async (parent, { traininglogId }) => {
            return await TrainingLog.findOne({ _id: traininglogId });
        },
    },

    Mutation: {
        addClimb: async (parent, { climbName, grade, location, date, notes }) => {
            return Climbs.create({ climbName, grade, location, date, notes });
        },
        addTrainingLog: async (parent, { logName, date, notes }) => {
            return TrainingLog.create({ logName, date, notes });
        },
        updateClimb: async (parent, { climbId, climbName, grade, location, date, notes }) => {
            return await Climbs.findOneAndUpdate(
                climbId,
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
        updateTrainingLog: async (parent, { traininglogId, logName, date, notes }) => {
            return await TrainingLog.findOneAndUpdate(
                traininglogId,
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
        removeClimb: async (parent, { climbId }) => {
            return await Climbs.findOneAndDelete({ climbId });
        },
        removeTrainingLog: async (parent, { traininglogId }) => {
            return await TrainingLog.findOneAndDelete({ traininglogId });
        }

    }

};

module.exports = resolvers;