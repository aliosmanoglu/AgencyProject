const Portfolio = require('../models/Portfolio');
const fs = require('fs');

exports.addPortfolio = async (req,res) => {

    const uploadDir = 'public/uploads';


    if (!fs.existsSync(uploadDir)) {
      fs.mkdir(uploadDir, (err) => {
        if (err) {
          console.log('error');
          return;
        }
      });
    }
    const image = req.files.img;
    let uploadPath = __dirname + '/../public/uploads/' + image.name;
  
  
    console.log(uploadPath);
  
    image.mv(uploadPath, async () => {
      await Portfolio.create({
        ...req.body,
        img: '/uploads/' + image.name,
      });
    });
  
    res.redirect('/');

}

exports.updatePortfolio = async (req,res) => {

    try {
        const portfolio = await Portfolio.findOneAndUpdate({
            _id : req.params.id
        }, {
            ...req.body
        }, 
        );


        res.send("UPDATE SUCCESFULL")

    } catch (error) {
        console.error(error);
    }

}