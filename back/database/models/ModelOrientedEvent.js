const { Model } = require('sequelize');
const sequelize = require('../db.js');

class ModelOrientedEvent extends Model { }

ModelOrientedEvent.init({

},{
    sequelize,
    freezeTableName: true,
    modelName: 'Oriented_event'
});

module.exports = ModelOrientedEvent;