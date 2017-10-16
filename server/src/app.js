const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  const email = req.body.email
  const pass = req.body.password
  res.send({
    message: `Hello ${email}, this is your password: ${pass}`
  })
})

app.listen(process.env.PORT || 8081)

console.log('Hello')
