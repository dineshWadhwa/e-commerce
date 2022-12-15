import mongoose from "mongoose";

const connection =()=>{

const DB = "mongodb+srv://user:dinesh12@cluster0.zkibzi6.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log('DataBase Connected')
}).catch((error)=>console.log(error));}

export default connection ;