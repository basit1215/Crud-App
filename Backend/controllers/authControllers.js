import { User } from "../models/authModel.js";
import bcrypt from  "bcryptjs";
import jwt from 'jsonwebtoken';
// import { sendResetEmail, sendSuccessEmail } from "../mailtrap/email.js";
// import crypto from 'crypto';

export const registerController = async(req,res)=>{

    const {email,password,role,username} = req.body;
    if(!email || !password || !role || !username) {
        return res.status(400).json({message: "All ssfields are required"})
    }

    const user = await  User.findOne({email})
    console.log(user);

    if(user){
        return res.status(400).json({message: "Email already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email,
        password: hashedPassword,
        role,
        username
    })
    res.status(201).json({message: "User created successfully",newUser})




}

export const loginController = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) {
        return res.status(400).json({message: "All fields are required"})
    }
    const user = await  User.findOne({email})
    if(!user){
        return res.status(400).json({message: "User not found"})
    }
    const isValidatePassword = await bcrypt.compare(password,user?.password)
    if(!isValidatePassword){
        return res.status(400).json({message: "Invalid Credentials"})
    }
    const token = jwt.sign({id:user?._id},process.env.JWT_SECRET)
    console.log(token)
    res.status(200).json({message:"Login successful",token,user});
}
export const logoutController = (req,res)=>{
    res.status(200).send({message:"Logout successfully"})
}

// const forgotPasswordController = async(req,res)=>{
//     const {email} = req.body;
//     try{
//          const user = await  User.findOne({email})
//         if(!user){
//             return res.status(400).json({message: "User not found"})
//         }








//         const resetToken = crypto.randomBytes(20).toString("hex");

//         const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; 


//         user.resetPasswordToken = resetToken;
//         user.resetPasswordExpiresAt = resetTokenExpiresAt;

//         await user.save();
        
//         await sendResetEmail(email,`http://localhost:5173/reset-password/${resetToken}`);
        
        
        
//         res.status(200).send({message:"Email sent"})




		
		
		
		
//     }
//     catch(error){
//         res.status(400).send({message:error.message})
//     }
// }
// export const resetPasswordController = async(req,res)=>{
//     const {password} = req.body;
//     const {token} = req.params;
//     try{
//          const user = await  User.findOne({resetPasswordToken:token})
//          console.log(user);
//         if(!user){
//             return res.status(400).json({message: "Invalid token or expired"})

//         }
//         const hasPassword = await bcrypt.hash(password,10);
//         user.password = hasPassword;
//         user.resetPasswordToken = undefined;
// 		user.resetPasswordExpiresAt = undefined;
//         await user.save();
//         await sendSuccessEmail(user?.email);
//         res.status(200).send({message:"Email sent"})
//     }
//     catch(error){
//         res.status(400).send({message:error.message})
//     }
        
// }

// export  {registerController,loginController,logoutController,forgotPasswordController}


//  className = {` ${styles.alignment} ${styles.flex}`};