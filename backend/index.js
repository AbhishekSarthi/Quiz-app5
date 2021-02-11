const express = require('express');
const requests = require('./routes/requests');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv/config');
const PORT = process.env.NODE_ENV || 5000;

const app = express();

//home page
//home page
app.get('/', (req, res) => {
    res.send('home page');
});

app.use(express.json());

//details page
app.use('/details', requests);


    app.use(express.static('public_html'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('public_html', 'index.html'));
    });


app.listen(PORT, console.log(`Server running on port ${PORT}`));

// fastcsv
//   .write(data, { headers: true })
//   .pipe(ws);

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected...')
);
// const __dirname = path.resolve();
