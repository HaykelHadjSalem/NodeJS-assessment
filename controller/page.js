
const db = require('../db/db.js')

const {pages} = db

let getAllPages = async(req, res) => {
    try{
    const allPages = await pages.findAll();
    res.json({allPages})
    }catch(err){
        console.error(err)
    }  
}

module.exports = {getAllPages};