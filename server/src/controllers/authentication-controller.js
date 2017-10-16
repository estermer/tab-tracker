const {User} = require('../models')

module.exports = {
  async register (req, res) {
    console.log(`--- LOG INFO: Registering user email: ${req.body.email}, password: ${req.body.pass}`)
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}
