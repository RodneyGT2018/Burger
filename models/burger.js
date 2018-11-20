// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // "cols" and "vals" are arrays
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for burgers_Controller.js
module.exports = burger;