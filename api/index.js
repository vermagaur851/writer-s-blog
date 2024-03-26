import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'

dotenv.config()
mongoose.connect(`mongodb+srv://vermagaurav851:${process.env.DB_PASSWORD}@cluster0.mwrr8de.mongodb.net/`)
.then(()=>{
    console.log("mongoDB connected !!!");
})
.catch((err)=>{
    console.log(err);
})

const app = express()

app.listen(3000, () => {
    console.log("Serber listening at 3000");
})

app.use('/api/user',userRoutes)
app.use('/api/auth',auth)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})