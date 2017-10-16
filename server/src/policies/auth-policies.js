const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid e-mail address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics
              <br>
              2. It must be atleast 8 charaters in length and not greater than 32 characters`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
