
const HomeModel=require('../models/homes');

exports.addPostHome=(req, res) => {
  const {houseName, ownerName, location, price, imageUrl, description }=req.body;

  const id=Date.now().toString();

  if(!houseName || !ownerName || !location || !price || !imageUrl || !description) {
    return res.status(400).render("errors/error", { message: "All fields are required.", title: "Error" });
  }
  const home=new HomeModel(id,houseName, ownerName,location,Number(price),imageUrl,description);
  home.save();
  res.render("host/home-added",{home,title:"Home Added Successfully"});
};

exports.addGetHome=(req, res) => {
  res.render("host/add-home", { title: "Add Home" });
}
