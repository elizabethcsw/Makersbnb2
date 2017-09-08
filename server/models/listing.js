// sets up table columns etc and defines one to many relationships

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
    from_dates: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    to_dates: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    reserve_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    confirm_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
