const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('employee', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = db.define('User',
 {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    },
  employeeId: {
    type: DataTypes.INTEGER            
    },
  employeePlace: {
    type: DataTypes.STRING            
    },
  employeeQualification: {
    type: DataTypes.STRING            
  }
},
  {
  });
const User1 = db.define('User1',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    school: {
    type: DataTypes.STRING
    },
  address: {
    type: DataTypes.INTEGER            
    },
  place: {
    type: DataTypes.STRING            
    },
  },

  );

module.exports - {
  db
}






