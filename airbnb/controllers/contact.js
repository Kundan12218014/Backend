exports.contactResponse=(req, res) => {
  console.log(req.body.name, req.body.email);
  res.render("contactResponse", { title: "Contact Response", name: req.body.name, email: req.body.email });
}
exports.contactUsPage = (req, res) => {
  res.render("contact", { title: "Contact Us" });
};