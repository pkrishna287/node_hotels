const express = require('express');
const router = express.Router();
const Person = require('../models/Person')
router.post('/',async (req,res)=>{
    try{
      const data = req.body
      const newPerson = new Person(data);
      const response = await newPerson.save()
      console.log('data saved')
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
})

router.get('/',async (req,res)=>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})


router.get('/:workType',async (req,res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' || workType == 'owner' || workType == 'manager'){
      const response = await Person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:"Invalid work Type"});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

router.put('/:id', async (req,res)=>{
  try{
    const personid = req.params.id;
    const updateddata = req.body;
    const response = await Person.findByIdAndUpdate(personid,updateddata,{
      new: true, //return updated document
      runValidators : true, //Run mongoose validation
    })
    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

router.delete('/:id', async (req,res)=> {
  try{
    const personid = req.params.id;
    const response = await Person.findByIdAndDelete(personid);
    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data removed');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

module.exports = router;