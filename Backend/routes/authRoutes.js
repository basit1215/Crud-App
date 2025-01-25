import express from 'express';
// import { forgotPasswordController, loginController, logoutController, registerController, resetPasswordController } from '../controllers/authControllers.js';
import { loginController, logoutController, registerController } from '../controllers/authControllers.js';


const authRoutes = express.Router();


authRoutes.post('/register', registerController);

authRoutes.post('/login', loginController);


authRoutes.post('/logout', logoutController);

// authRoutes.post('/forgot-password', forgotPasswordController);





// authRoutes.post('/reset-password/:token', resetPasswordController);



export default authRoutes;
