const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://AshaNayak:MongoDB23@cluster0.hocdphq.mongodb.net/?retryWrites=true&w=majority",{
useUnifiedTopology:true,
useNewUrlParser:true   
}
).then((respone)=>{
    console.log("connected to Database");
})
.catch((error)=>{
    console.log(error);
});

