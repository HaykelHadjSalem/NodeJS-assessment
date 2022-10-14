const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /auth/captcha:
 *   get:
 *     tags:
 *     - "auth"
 *     summary: get random captcha .
 *     description: return captcha to user to allow authentication action <br> without access_token
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *          description: code,<br>message,<br>data:{_id,originalImage,puzzle,position}
 *       "500":
 *          description: code,<br>error:"error"
 */
 router.get('/captcha', (req,res)=>{
    res.send({mama:5656})
 })

 module.exports = router