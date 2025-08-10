exports.userUI=(req, res) => {
  res.render("store/home-page", { title: "Home" });
}

exports.homeList = async (req, res) => {
  const homes = await HomeModel.getAllHomes((homes => {
    res.render('store/homes-list', { homes, title: "All Homes" });
  }));
}
exports.getBooking = async (req, res) => {
  const home = await HomeModel.getAllHomes((homes) => {
    res.render('store/booking', { homes, title: 'Bookings' });
  })
}
exports.getFavourite = async (req, res) => {
  const home = await HomeModel.getAllHomes((homes) => {
    res.render('store/favourite-list', { homes, title: 'Favourites' });
  })
}