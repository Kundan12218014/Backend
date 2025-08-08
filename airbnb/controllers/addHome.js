
const HomeModel=require('../models/homes');

exports.addPostHome=(req, res) => {
  const {houseName, ownerName, location, price, imageUrl, description }=req.body;

  const id=Date.now().toString();

  if(!houseName || !ownerName || !location || !price || !imageUrl || !description) {
    return res.status(400).render("error", { message: "All fields are required." });
  }
  const home=new HomeModel(id,houseName, ownerName,location,Number(price),imageUrl,description);
  home.save();

  res.render("homeAdded",{home,title:"Home Added Successfully"});
};

exports.addGetHome=(req, res) => {
  res.render("addHome", { title: "Add Home" });
}

exports.homeList=async(req, res) => {
  const homes=await HomeModel.getAllHomes((homes=>{
    res.render('homes', { homes, title: "All Homes" });
  }));
}