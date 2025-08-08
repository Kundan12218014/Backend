const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/rootPath');

module.exports = class HomeModel {
  constructor(id, houseName, ownerName, location, price, imageUrl, description) {
    this.id = id;
    this.houseName = houseName;
    this.ownerName = ownerName;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    HomeModel.getAllHomes(registeredHomes => {
      registeredHomes.push(this);
      const homedataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homedataPath, JSON.stringify(registeredHomes), err => {
        if (err) {
          console.log(err);
        }
        else {
          console.log('data written sucessfully');
        }
      });
    })
  }
  static getAllHomes(callback) {
    const homedataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homedataPath, (err, data) => {
      callback((!err) ? JSON.parse(data) : []);
    });
  }
}