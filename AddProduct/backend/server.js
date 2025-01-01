import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
// import Product from './mode/product.mode.js';
import productRoutes from "./routes/product.route.js"

dotenv.config(); // Loads environment variables

console.log("MongoDB URI:", process.env.MONGO_URI);
     // Verify the URI

const app = express();

app.use(express.json()); //for the req body


app.use("/api/products", productRoutes)
const Port= process.env.PORT
// const PORT = 3000;

app.listen(Port, async () => {
    await connectDB();
    console.log(`Server running on port ` + Port);

});
