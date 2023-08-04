const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'family',
  username: 'root',
  password: 'MySQLServer8.0.33',  
  host: 'localhost',
  dialect: 'mysql'  
});






// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'MySQLServer8.0.33',
  database: 'family'
});

const User = sequelize.define('family_members', {
  // attributes 
  id: {
    type: Sequelize.INTEGER},
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server running...')  
  });
})
app.get('/family_members', (req, res) => {
  User.findAll().then(family_members => res.json(family_members))
})


