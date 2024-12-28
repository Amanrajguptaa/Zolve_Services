import express from "express"
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add-product",adminAuth,upload.fields([{ name: "image1", maxCount: 1 }]),addProduct);
productRouter.get("/list-product",listProducts);
productRouter.delete("/remove",adminAuth,removeProduct);
productRouter.get("/products/:productId",singleProduct);

export default productRouter;
