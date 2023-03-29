const express = require('express');
const get_notification = require('../api_operations/service_operations/notification_api/get_notification');
const send_notification = require('../api_operations/service_operations/notification_api/send_notification')
const router = express.Router()

router.post('/push/notification' ,(req,res)=>{
   send_notification(req,res);
})

router.get('/get/notification' ,(req,res)=>{
   get_notification(req,res)
})



module.exports = router