exports.sendReqParam = (req,res) => {
    res.render("index");
};

exports.respondImage = (req,res) => {
    let imageName = req.params.imageNumber;
    if (imageName == 1) {
        res.render("image_1");
    };

    if (imageName == 2) {
        res.render("image_2");
    }

    if (imageName == 3) {
        res.render("image_3")
    }
    
};