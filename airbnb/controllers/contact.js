exports.contactResponse=(req, res) => {
  console.log(req.body.name, req.body.email);
  res.render("support/contactResponse", { title: "Contact Response", name: req.body.name, email: req.body.email });
}
exports.contactUsPage = (req, res) => {
  res.render("support/contact", { title: "Contact Us" });
};