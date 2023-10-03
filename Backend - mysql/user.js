const Sequelize = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('user', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;
