import express from 'express';
import cors from "cors"
import 'dotenv/config'
import connectDB from './src/db/index.js';
import connectCloudinary from './src/utils/cloudinary.js'
import userRouter from './src/routes/user.route.js';
import productRouter from './src/routes/product.route.js';
import cartRouter from './src/routes/cart.route.js';
import orderRouter from './src/routes/order.route.js';

const app = express()
const port=process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectCloudinary()
connectDB()
.then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`Server Running on Port:${port}`);
    })
})
.catch((error)=>{
    console.log(error)
})



app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

