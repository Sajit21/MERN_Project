import express from  "express";
import mongoose from "mongoose";
import Product from '../mode/product.mode.js';
import { getProduct, postProduct,putProduct, deleteProduct} from "../controller/product.control.js";


const router=express.Router();




router.post('/', postProduct);

// to get the products
router.get('/', getProduct);

router.put("/:id",putProduct) ;


//incase the product delete garna paryo bhani
router.delete("/:id", deleteProduct);

export default router;