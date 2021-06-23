const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONN = process.env.DB_CONN_STR;


app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.route'));

app.get('/*', function(req,res){
    const fullPath = path.join(__dirname + '/dist/index.html');
    console.log(" Fetching from.." + fullPath);
      res.sendFile(fullPath);
  })
}
/*if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}*/

async function start() {
    try {
        await mongoose.connect(DB_CONN,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        });

        app.listen(PORT, () =>{
            console.log(`Server started on port ${PORT}`)
        })
        
    } catch (err) {
        console.error(err);
    }
}
start();