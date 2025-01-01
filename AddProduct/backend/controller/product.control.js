import Product from "../mode/product.mode.js";
import mongoose from "mongoose";

 export const getProduct= async(req,res) =>
     {
    try 
    {
        const retrieveProduct= await Product.find({})
        // console.log("the fetched products: ",retrieveProduct.Product )
        res.status(200).json({success:true, data: retrieveProduct})
    } catch (error)
    {
        console.log("didn't successed while fetching", error.message)
        res.status(404).json(
            {
                succes:false,
                message:"some issue while fetching"


             })
    }
    }

    export const putProduct= async (req,res)=>{
        const {id} = req.params;
    
        const product= req.body;
    
        if(!mongoose.Types.ObjectId.isValid(id))
            {
            res.status(404).json({success:false, message:" server not found"})
    
        }
    
        try {
           const updateproduct= await Product.findByIdAndUpdate(id,product,{new:true})
            res.status(200).json({success:true, data: updateproduct})
        } catch (error) {
            res.status(404).json({succes:false, message: "server not found"})
            
        }
    
    }

    export const deleteProduct=async (req,res)=>
    {const {id}= req.params;
    // console.log(id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
        succes: true, message: "successfully deleted the id"
        })
        
    } catch (error) {
        console.log("error while deleting the product", error.message)
        res.status(404).json({success:false,message:"sever not found"})
        
    }
    }

    export const postProduct=async (req, res) => {
        const product = req.body;
        
        if (!product.name || !product.price || !product.image) {
            return res.status(400).json({ success: false, message: "please provide all data" });
        }
    
        const newProduct = new Product(product);
        console.log("product data :", req.body)
        try {
            await newProduct.save();
            res.status(201).json({ success: true, data: newProduct });
        } catch (error) {
            console.error("Error while creating product:", error.message);
            res.status(500).json({ success: false, message: "server error" });
        }
    }


    
    

    

