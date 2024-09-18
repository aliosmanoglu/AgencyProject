const express = require('express');

const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


const pageRouter = require('./routes/pageRoute');
const portfolioRoute = require('./routes/portfolioRoute');

const app = express();

app.set("view engine", "ejs");



//CONNECT
mongoose.connect('mongodb+srv://root:root@agencycluster.dbdsb.mongodb.net/')
.then(() =>{
    console.log("CONNECTED TO DB");
}, 
(err) => console.error(err)
);

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //FORM JSON COMPILE
app.use(express.json());
app.use(fileUpload());


//ROUTERS
app.use('/',pageRouter);
app.use('/portfolio',portfolioRoute)


const port = 3000;


app.listen(port,() => {
    console.log("SERVER STARTED ON " + port);
    
})
