const express = require('express');
const router = express.Router();
const {emailSignup} = require('../middleware/passeport.middleware')


/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *     - "auth"
 *     summary: signup with email and password.
 *     description: user enter his credentials to create a new account, system check if email exist or not <br> without access_token.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       "200":
 *          description: code,<br>message,<br>data:{"access_token":token,"id":user_id}
 *       "401":
 *          description: code,<br>error:{error:true,message:'account_already_used'}
 *       "500":
 *          description: error=eror
 */
 router.post('/signup', emailSignup)


 module.exports = router