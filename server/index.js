const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const collection = require('./routes/collection');
const URI = 'mongodb+srv://mantejkaleka:CpRH5TOjoubdsM58@cluster0.fdasua3.mongodb.net/test';
const client = new MongoClient(URI);
const bodyParser = require('body-parser');
const app = express();

// client.connect();
console.log('connected to mongodb');
mongoose.connect(URI)
.then(() => console.log('connected to MongoDB...'))
.catch(err => console.error('could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(cors({ origin: true, cedentials: true }));
app.use('/api/collection', collection);

const port= process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
