import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/next-ecommerce').then(() => {
    console.log("Connected with database successfully")
});