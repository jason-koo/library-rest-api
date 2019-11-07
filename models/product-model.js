const mongoose = require('mongoose'); // returns a Singleton object
// require('mongoose') call returns a Singleton object
// the first time it is called, creates an instance of the mongoose class and returns it
const path = require('path');

const ProductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    loanPeriod: Number,
    quantity: Number
});


//Input validation


//Export model
module.exports = mongoose.model('Product', ProductSchema);