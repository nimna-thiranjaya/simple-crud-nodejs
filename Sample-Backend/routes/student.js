const router = require("express").Router();
const student = require("../models/student");

//add Student to database
router.post("/add" ,(req,res)=>{
 
    let newstudent = new student(req.body);
 
    newstudent.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"student save successfully"
        });
    });
});

//Display student
router.get("/display",(req,res)=>{
    student.find().exec((err,student)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existinstudents:student,
        });
    });
});

//update Student
router.route('/update/:id').put((req,res)=>{
    student.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,student)=>{
            
        if(err){
            return res.status(400).json({error:err});
        }
            
            return res.status(200).json({
                success: "Update Successfully"
        });
    });
 });

 //Delete Student
router.route('/delete/:id').delete((req,res)=>{
    student.findByIdAndRemove(req.params.id).exec((err,deletestudent)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deletestudent
        });
    });
 });
 
module.exports = router;