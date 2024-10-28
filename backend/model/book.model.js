import mongoose from "mongoose";

const bookschema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    tittle:String
})
const Book = mongoose.model("Book",bookschema);

export default Book;