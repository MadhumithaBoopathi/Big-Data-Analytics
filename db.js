const mongoose = require("mongoose");

const dbUri = "mongodb://localhost:27017/bookstore";

module.exports = () => mongoose.connect(dbUri);
