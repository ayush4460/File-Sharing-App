import mongoose from 'mongoose';


const filename = new mongoose.Schema({
    path:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required : true
    },
    downloadContent:{
        type: Number,
        required : true,
        default: 0
    }
})

const File = mongoose.model('File-Sharing',filename);
export default File;