const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const collection = require('./routes/collection');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://localhost/HOJ')
.then(() => console.log('connected to MongoDB...'))
.catch(err => console.error('could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(cors({ origin: true, cedentials: true }));
app.use('/api/collection', collection);

const port= process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
