const model = require('../models/FirstModel');

const getObject = () => {
    model.object.currentDate = new Date();
    return model.object;
}

exports.getObject = getObject;