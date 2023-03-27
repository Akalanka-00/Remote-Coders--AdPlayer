const express = require('express')
const get_notifications = require('../api_operations/admin_operations/get_notifications')
const router = express.Router()

router.get('/get/notifications' ,(req,res,next)=>{
    get_notifications(req , res)
})


module.exports = router