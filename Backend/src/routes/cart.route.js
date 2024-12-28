import express from 'express';
import { addToCart, getCart, updateCart } from '../controllers/cart.controller.js';
import authUser from '../middleware/auth.js';
const cartRouter = express.Router();

cartRouter.post('/get-cart',authUser,getCart);
cartRouter.post('/add-to-cart',authUser,addToCart);
cartRouter.post('/update-cart',authUser,updateCart);


export default cartRouter;