import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import {DB_NAME} from './constant.js'

dotenv.config()
mongoose.connect(`mongodb+srv://vermagaurav851:${process.env.DB_PASSWORD}@cluster0.mwrr8de.mongodb.net/${DB_NAME}`)
.then(()=>{
    console.log("mongoDB connected !!!");
})
.catch((err)=>{
    console.log(err);
})

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
})

app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})