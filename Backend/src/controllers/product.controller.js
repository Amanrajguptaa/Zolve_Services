import productModel from "../models/product.model.js";
import {v2 as cloudinary} from 'cloudinary';

const addProduct= async(req,res)=>{
    try {
        const{name,description,price,category,subCategory,bestSeller,discount} = req.body;

        const image1 = req.files.image1[0]

        const images =[image1].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (image) => {
              console.log("Uploading:", image.path);
              let result = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
              return result.secure_url;
            })
          );
        const productData ={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            discount,
            bestSeller: bestSeller === "true" ? true : false ,
            images:imagesUrl,
            date:Date.now()
        } 

        const newProduct = new productModel(productData);
        await newProduct.save();

        res.json({
            success:true,
            message: "Product added successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to add product"})
    }

}

const listProducts = async(req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({
            success:true,
            products
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }

}

const removeProduct = async(req,res)=>{
    try {
       await productModel.findByIdAndDelete(req.body.id) 
       res.json({
        success:true,
        message:"Product Removed"
       })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

const singleProduct = async (req, res) => {
    try {
      const { productId } = req.params; 
      const product = await productModel.findById(productId);
  
      res.json({
        success: true,
        product,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
  

export {addProduct,listProducts,removeProduct,singleProduct}