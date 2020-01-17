//- Constants
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const routes    = require('./routes');

const app       = express();

//- Database - MongoDB(Näo relacional)
mongoose.connect('mongodb+srv://iescorizza:is159753@cluster0-2cpnr.gcp.mongodb.net/week10?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//- App Config
//app.use(cors({origin: 'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);

//- App Start
app.listen(3333);