import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import {dbConnection }from './db/dbConnection.js';
import router from './routes/routes.js';

const app = express();
dotenv.config();


// middleware
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).json({message: 'API is running'});
})

// routes
app.use('/api', router)


dbConnection()

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });