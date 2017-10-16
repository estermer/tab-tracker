const authController = require('./controllers/authentication-controller')
const authPolicies = require('./policies/auth-policies')

module.exports = (app) => {
  app.post('/register', authPolicies.register, authController.register)
}
