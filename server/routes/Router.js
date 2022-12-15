import express from "express";
import userdb from "../modals/UserSchema.js";
import bcryptjs from "bcryptjs";
import  authenticate  from  '../middleware/authenticate.js';
import ProductApi from "../modals/ProductApi.js";


const router = new express.Router();

//for user registration

router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fname, email, password, cpassword } = req.body;

  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const preuser = await userdb.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password and cpassword not match" });
    } else {
      const finalUser = new userdb({
        fname,
        email,
        password,
        cpassword,
      });

      //here password hashing

      const storeData = await finalUser.save();
      // console.log(storeData)
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("register catch block error");
  }
});

// for user login

router.post("/login", async (req, res) => {
  // console.log(req.body)

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const userValid = await userdb.findOne({ email: email });

    if (userValid) {
      const isMatch = await bcryptjs.compare(password, userValid.password);

      if (!isMatch) {
        res.status(422).json({ error: "Incorrect password" });
      } else {
        //token generate
        const token = await userValid.generateAuthtoken();
        // console.log(token)

        //cookiegenerate
        res.cookie("usercookie",token,{
            expires:new Date(Date.now()+9000000),
            httpOnly:true
        });

        const result = {
            userValid,token
        }
        res.status(201).json({status:201,result})
      }
    }
  } catch (error) {
    res.status(422).json(error);
    console.log('catch block')
  }
});


//user valid for dashboard
router.get("/validuser",authenticate,async(req,res)=>{
try{
const ValidUserOne = await userdb.findOne({_id:req.userId});
res.status(201).json({status:201,ValidUserOne});
}catch(error){
  res.status(400).json({status:400,error});
}
});

//user logout

router.get("/logout",authenticate,async(req,res)=>{
  try{
req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
return curelem.token !== req.token
}) ;

res.clearCookie("usercookie",{path:"/"});

req.rootUser.save();

res.status(201).json({status:201})
  }catch(error){
    res.status(401).json({status:401,error})
  }
})


//getting all products
router.get('/productApi',async (req,res)=>{
  try{
res.json({ProductApi})
console.log("first")
  }catch(error){
    res.status(401).json({status:401,error})
  }
})

export default router;
