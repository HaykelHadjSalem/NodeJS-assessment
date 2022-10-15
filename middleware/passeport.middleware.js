const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const {owner}  = require('../db/db.js')
const { responseHandler } = require('../helpers/response-handler');
 const {generateAccessToken} = require('./auth.js')

/*
 * begin signup with email and password
 */
passport.use(
    'auth_signup_emailStrategy',
    new LocalStrategy({ passReqToCallback: true }, async  (
        req,
        username,
        password,
        done
    ) => {
        let user = await owner.findOne({
            where: { email: username },
          })
        if (user) {
            return done(null,{message : "email already in use"})
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            let createdUser = await owner.create({email:username,password:hashPassword});
            let token = generateAccessToken(createdUser.toJSON())

            return done(null, {
                id: createdUser._id,
                token,
            })
        }
    })
)


exports.emailSignup = async (req, res, next) => {
    passport.authenticate('auth_signup_emailStrategy', (err, user, info) => {
        console.log(user)
        if (err) {
            return responseHandler.makeResponseError(res, 401, err)
        }

        if (!user) {
            return responseHandler.makeResponseError(res, 401, info)
        }

        req.logIn(user,  (err) => {
            var param = {
                access_token: user.token,
                id: user.id,
                ...user.message && {message: user.message} 
            }
           
            return responseHandler.makeResponseData(res, 200, 'success', param)
        })
        
    })(req, res, next)
}
/*
 * end signup with email and password
 */


