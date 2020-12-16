const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
// const path = requite('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '50MB' })) //in place of bodyParser

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    )
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Connect routes
const Users = require('./routes/user.route')
const Photos = require('./routes/photo.route')
app.use('/photo', Photos)
app.use('/user', Users)

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('../client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})