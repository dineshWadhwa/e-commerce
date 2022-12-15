import jwt from "jsonwebtoken";
import userdb from "../modals/UserSchema.js";
const keysecret = "dineshwadhwadineshwadhwadineshdv";

async function authenticate(req,res,next){

    try{
const token = req.headers.authorization;

const verifytoken = jwt.verify(token,keysecret);

const rootUser = await userdb.findOne({_id:verifytoken._id});

if(!rootUser){
    throw new Error('user not found')
}

req.token = token
req.rootUser = rootUser
req.userId = rootUser._id

next();

}catch(error){
res.status(401).json({status:401,message:"no token provide"})
    }


}

export default authenticate;