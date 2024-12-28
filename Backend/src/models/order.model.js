import mongoose from "mongoose";

const orderSchmea = new mongoose.Schema({

    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },

    date:{
        type:Number,
        required:true
    }
},{timestamps:true})


const orderModel = mongoose.models.order || mongoose.model('order',orderSchmea);


export default orderModel;