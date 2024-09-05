const mongoose=require('mongoose');

const financialRecordSchema=mongoose.Schema({
    userId:{
        type:String,
    },
    date:{
        type:Date,
        required:true, 
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        min:[0,"Price must be positive"]
    },
    category:{
        type:String,
        required:true,
    },
    paymentMethod:{
        type:String,
        required:true,
    }
})
const financialRecord=mongoose.model("financialRecord",financialRecordSchema);

export default financialRecord;