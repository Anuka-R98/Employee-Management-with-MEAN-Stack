const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employee_controller');

var app = express();
app.use(bodyParser.json());
app.use(cors()); //to allow any request from port number or domain

app.listen(3000, ()=> console.log('Server started at port : 3000'));    

app.use('/employees', employeeController);