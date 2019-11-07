const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product-model');

// db to use database connection
const db = require('../db');

// Route the GET request to controller
const ProductController = require('../controllers/product-controller');


// GET request to items
router.get('/list', ProductController.books_get_all);


// POST to create new items
router.post('/create', ProductController.create_new_item);


// Get information about a single product/item
router.get('/:itemID', ProductController.search_by_id);


// Update Item quantity
router.post('/updateQuantity/:itemID', ProductController.update_item_quantity);

// update item load period
router.post('/updateLoanPeriod/:itemID', ProductController.update_item_loanPeriod);


// Delete Item
router.get('/delete/:itemID', ProductController.delete_item);

module.exports = router;

