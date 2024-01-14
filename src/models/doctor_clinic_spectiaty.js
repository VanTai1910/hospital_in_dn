'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class doctor_clinic_spectiaty extends Model {
        static associate(models) {
            // define association here
        }
    };

    doctor_clinic_spectiaty.init({
        doctoerId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        spectiatyId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'doctor_clinic_spectiaty',
    });

    return doctor_clinic_spectiaty;
};
