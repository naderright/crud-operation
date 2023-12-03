const  express = require('express');
const connectDB = require('./DB/connectDB');
const { userRouter, productRouter } = require('./modules/router');
const app = express();
require('dotenv').config();
connectDB();
app.use(express.json());
app.use(userRouter,productRouter);

app.listen(process.env.PORT,()=>{
    console.log(`running in port ${process.env.PORT}`);
})