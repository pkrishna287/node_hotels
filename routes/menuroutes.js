const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu') 

router.post('/' ,async (req,res)=>{
    try{
      const data = req.body
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
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
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
  })
  router.get('/:id',async (req,res)=>{
    try{
      const menuid = req.params.id;
      const response = await MenuItem.findById(menuid);
      if(!response){
        return res.status(404).json({error: 'Item not found'});
      }
      console.log('data mali gayo');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
  })
router.put('/:id', async (req,res)=>{
    try{
      const menuid = req.params.id;
      const updateddata = req.body;
      const response = await MenuItem.findByIdAndUpdate(menuid,updateddata,{
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
      const menuid = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuid);
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
  module.exports = router