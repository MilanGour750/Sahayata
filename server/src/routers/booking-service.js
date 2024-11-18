const express= require('express')
const mongoose=require('mongoose');
const router = express.Router();
const Service = require("../models/booked-services")
const Coustmer = require("../models/Customer");

router.post('/book_services',async (req,res)=>{

    const user = await Coustmer.findOne({_id:req.body.id})
    
    const service = new Service({
        worker_name:req.body.name,
        customer_name:user.name,   //Right now hard-coded
        // customer_name:req.user.name,   //Right now hard-coded
        service_provided:req.body.type,
        // worker_contact:req.body.contact,
        customer_contact:user.contact,    //Right now hard-coded
        cost_of_work:req.body.charge,
        // location:"New Delhi",    //Right now hard-coded, since there is no sign up - sign in yet
        location:req.body.location,    //Right now hard-coded, since there is no sign up - sign in yet
        createdAt:Date(),
        date_for_booking: (Date())[8]+(Date())[9]+'-'+(Date())[4]+(Date())[5]+(Date())[6]+'-'+(Date())[11]+(Date())[12]+(Date())[13]+(Date())[14] ,
        time_for_booking: (Date())[16]+(Date())[17]+(Date())[18]+(Date())[19]+(Date())[20]+(Date())[21]+(Date())[22]+(Date())[23]

    })
    service.save().then(()=>{
        console.log(service)
        console.log("Service saved")
    })
















    
    res.redirect('/')



})
module.exports = router;
