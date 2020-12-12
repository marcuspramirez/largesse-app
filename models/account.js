module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    });
    return Account;
  };