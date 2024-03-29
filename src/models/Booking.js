'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            // define association here
        }
    };

    Booking.init({
        statusId: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        pactientId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Booking',
    });

    return Booking;
};
