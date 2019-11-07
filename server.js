// server.js
const express = require('express');
const http = require('http');
const app = require('./app');
var fs = require('fs');

const server = http.createServer(app);

// PORT 
const port = 1234;


server.listen(port, () => {
    console.log("listening on port" + port);
});