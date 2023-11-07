const mongoose=require('mongoose');
const facultySchema=mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    post:String,
    branch:String,

});
module.exports=mongoose.model("Faculty",facultySchema);