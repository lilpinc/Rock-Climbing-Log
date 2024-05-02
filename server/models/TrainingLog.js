const { Schema, model } = require('mongoose');

const trainingLogSchema = new Schema(
  {
    logName: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: true
    }
  }
);

const TrainingLog = model('TrainingLog', trainingLogSchema);

module.exports = TrainingLog;