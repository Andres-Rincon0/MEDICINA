import express from 'express'
import dotenv from "dotenv"
import router from './src/routes/routes.js';

const app = express();

dotenv.config();


app.use("/Citas", router) 

const port= process.env.PORT;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`server online on port ${port}`);
})
