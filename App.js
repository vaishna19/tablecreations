const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('employee', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = db.define('User',
 {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
    },
  employeeId: {
    type: DataTypes.INTEGER            
    // allowNull defaults to true
    },
  employeePlace: {
    type: DataTypes.STRING            
    // allowNull defaults to true
    },
  employeeQualification: {
    type: DataTypes.STRING            
    // allowNull defaults to true
  }
},
  {
  // Other model options go here
  });
 console.log(User === sequelize.models.User); // true 
const User1 = db.define('User1',
 {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school: {
    type: DataTypes.STRING
    // allowNull defaults to true
    },
  address: {
    type: DataTypes.INTEGER            
    // allowNull defaults to true
    },
  Place: {
    type: DataTypes.STRING            
    // allowNull defaults to true
    },
},
  {
  // Other model options go here
  });
console.log(User1 === sequelize.models.User1); // true
db.sync({
    force: true
}).then(() => {
  const vaishu = User.Create([
    {
      firstName: "vaishu",
      lastName: "jasper",
      employeeId: "356",
      employeePlace: "Udumalpet",
      employeeQualification: "B.Tech",

    },
    ]
  )
  })
  .catch((err) => console.log(err))

  db.sync({
    force: true
}).then(() => {
  const jasper = User1.Create([
    {
      firstName: "jasper",
      section: "C",
      address: "no 7",
      Place: "Udumalpet",

    },
    ]
  )
  })
  .catch((err) => console.log(err))

// db.authenticate()
//   .then(() => {
//     console.log('connection success')
//   })
module.exports - {
  db
}






