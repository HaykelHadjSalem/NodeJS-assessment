const express = require('express');
const router = express.Router();
const {getAllPages} = require('../controller/page')
/**
 * @openapi
 * /page/{id}:
 *   get:
 *     tags:
 *     - "page"
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
 router.get('/:id', (req,res)=>{
    res.send({mama:5656})
 })


 router.get('/',getAllPages)


 module.exports = router