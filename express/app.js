const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const mysql = require('mysql')

app.use(cookieParser())

app.get('/', (req, res) => {
  console.log('cookies: ', req.cookies);
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db1'
  })

  connection.connect()

  connection.query('select * from user', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows)
  })

  connection.end()
  res.send('Hello World! fella')
})

app.get('/api/users', (req, res) => {
  res.json({
    data : [
      {name: 'Niraj'},
      {name: 'Dipan'}
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})