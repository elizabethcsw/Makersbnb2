// <script src="chai.js" type="text/javascript"></script>

// User.associate = function(models) {
//     User.hasMany(models.Task);
//   }
//
//
//   Listing.associate = function(models) {
//       // Using additional options like CASCADE etc for demonstration
//       // Can also simply do Task.belongsTo(models.User);
//       Task.belongsTo(models.User, {
//         onDelete: "CASCADE",
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     }
// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// description: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// location: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// price: {
//   type: DataTypes.FLOAT,
//   allowNull: false,
// },
// reserve_status: {
//   type: DataTypes.BOOLEAN,
//   allowNull: false,
// },
// confirm_status: {
//   type: DataTypes.BOOLEAN,
//   defaultValue: false,
// },
