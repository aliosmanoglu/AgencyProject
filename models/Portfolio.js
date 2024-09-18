const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({

    name : {
        type : String,
        required: true,
    },
    
    desc : {
        type: String,
        required : true,
    },

    img : {
        type: String,
        required : true,
    }

});

const Portfolio = new mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
