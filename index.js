require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//create express server
const app = express();

//config cors
app.use(cors());

//read body 
app.use(express.json());

//DB
dbConnection();

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/search', require('./routes/search'));

app.listen(process.env.PORT, () => {
    console.log("server running port " + process.env.PORT)
})