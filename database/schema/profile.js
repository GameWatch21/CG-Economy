const mongoose = require("mongoose");

const ProfileSchem = mongoose.Schema({
     userid: { type: String , require: true , unique: true },
     guildid: { type: String , require: true },
     money: { type: Number},
     energy: { type: Number , default: 100 },
     job: { type: Number , default: 0 },
     registeredAt: { type: Number, default: Date.now() }
});

const model = mongoose.model("Profile" , ProfileSchem);

module.exports = model