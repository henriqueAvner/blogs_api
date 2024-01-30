'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'display_name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }

    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
