'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      available_dates: {
        type: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATEONLY)),
        allowNull: true,
      },
      reserve_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      confirm_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Listings'),
};
