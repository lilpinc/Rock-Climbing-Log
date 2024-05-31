const db = require('../config/connection');
const { Climbs, TrainingLog } = require('../models');
const cleanDB = require('./cleanDB');
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const climbsData = require('./ClimbsData.json');
const trainingLogData = require('./TrainingLogData.json');

db.once('open', async () => {
    // clean databases
    await cleanDB("Climbs", "climbs");
    await cleanDB("TrainingLog", "traininglogs");

    await Climbs.create(climbsData);
    await TrainingLog.create(trainingLogData);
   
    console.log('all done!');
    process.exit(0);
});