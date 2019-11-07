const Product = require('../models/product-model');
const mongoose = require('mongoose');
const app = require('express');
const path = require('path');

// GET all items
exports.books_get_all = (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
        res.send(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

// Create new item
exports.create_new_item = (req, res, next) => {
    const item = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        period: req.body.period,
        quantity: req.body.quantity
    });
    item
    .save()
    .then(result  => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POST requests to /items!",
        createItem: item
    });
};

// Search by id
exports.search_by_id = (req, res, next) => {
    const id = req.params.itemID;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
};

// Update Item quantity
exports.update_item_quantity = (req, res, next) => {
    Product.findOneAndUpdate({_id: req.params.itemID}, req.body, {new: true}, (err, doc) => {
        if(!err) {
            console.log('it works');
            res.status(200).json(doc);
        } else {
            res.status(500).json({
                error: err
            })
        }
    });
};

// Update an item's load period
exports.update_item_loanPeriod = (req, res, next) => {
    Product.findOneAndUpdate({_id: req.params.itemID}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.status(200).json(doc);
        }
        else {
            res.status(500).json({
                error: err
            })
        }
    })
};

// Delete Item
exports.delete_item = (req, res, next) => {
    Product.findByIdAndRemove(req.params.itemID, (err, doc) => {
        if(!err) {
            res.status(200).json(doc);
        } else {
            res.status(500).json(doc);
        }
    });
};