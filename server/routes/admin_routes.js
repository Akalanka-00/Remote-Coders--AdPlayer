const express = require('express')
const get_daily_developer_data = require('../api_operations/admin_operations/financial_operations/get_daily_developer_data')
const router = express.Router()

router.get('/financial/developer/daily' ,(req,res,next)=>{
   get_daily_developer_data(req,res);
})


module.exports = router