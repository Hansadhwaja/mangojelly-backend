const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
bookName:{
    type:String,
    required:true
},
authorName:{
    type:String,
    required:true
},
year:{
    type:Number,
    required:true
},
price:{
    type:Number,
    required:true
},
discount:{
    type:Number
},
pages:{
    type:Number,
    required:true
},
condition:{
    type:String,
    required:true,
    enum:['new','used']
},
description:{
    type:String
}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;