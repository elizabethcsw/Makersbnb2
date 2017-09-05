'use strict';

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    available_dates: {
      type: DataTypes.ARRAY(DataTypes.RANGE(DataTypes.DATEONLY)),
      allowNull: true,
    },
    reserve_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    confirm_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Listing.associate = (models) => {
    Listing.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Listing;
};
