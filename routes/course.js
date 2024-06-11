
const router=require("express").Router();
const Course=require("./../models/Course");


router.get("/",async (req,res)=>{
try{
const courses=await Course.find();
res.status(200).json(courses);
}catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/",async(req,res)=>{
    const newCourse= new Course (req.body);
    try{
        const savedCourse=await newCourse.save();
        res.status(201).json(savedCourse);
}
catch(error){
    res.status(500).json({ message: error.message });
}
});

router.get("/:id", async (req,res)=>{
try{
    const foundCourse=await Course.findById(req.params.id);
    res.status(200).json(foundCourse);
}catch(error){
    res.status(500).json({ message: error.message });   
}
});

router.put("/:id/like", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id/unlike", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: -1 } },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  
  module.exports = router;
  

