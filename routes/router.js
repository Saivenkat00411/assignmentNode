const express=require('express')
const router=express.Router()
const {getDetails}=require('../controllers/controller')
router.get('/',getDetails);

module.exports=router