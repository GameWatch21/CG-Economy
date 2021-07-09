const mongoose = require("mongoose");

module.exports = mongoose.model("economy", 
   new mongoose.Schema({
     money: { type: Number},
     energy: { type: Number , default: 100 },
     job: { type: Number , default: 0 },
   })
);