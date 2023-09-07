import mongoose from "mongoose";
var a=["e","slp","d"];
mongoose.connect('mongodb://127.0.0.1/Sample').then(()=>
        {console.log("Success")});
        const value=new mongoose.Schema({
            task:String,
        })
        const taskval=new mongoose.model("taskval",value);
        // a.forEach(element => {
        //     const adder= async()=>{
        //         const ss= await taskval.create({
        //             task:element,
        //         })
        //     }
            
        // });
        const delet =async(val)=>{
            await taskval.deleteOne({ task: val });
            } 
      
            delet("sd");
       async function find(){
       var t=  await taskval.find()
       console.log(t.length);
       for(var i=0;i<t.length-2;i++)
       {
        console.log(t[i].task);
        delet(t[i].task);
       }
     }
      find();
      
       
        
        