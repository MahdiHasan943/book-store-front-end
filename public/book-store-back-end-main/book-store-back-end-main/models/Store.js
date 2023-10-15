const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validate = require("validator");
const StoreSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:[ true,'Please provide a brand name'],
        lowercase: true,
        enum: {
            values: ["dhaka", "barishal", "syllet", "khulna", "rajshahi", "rangpur", "maymonsing"],
            message:"{VALUE} is not a valid name",
         
        }
    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
        default:"active"
    },
    manager: {
        name: String,
        contactNumber: String,
        id: {

            type: ObjectId,
            ref:"User"
        },
        
    }

},{timestamps:true})

const Store = mongoose.model("Store", StoreSchema);
module.exports = Store;
