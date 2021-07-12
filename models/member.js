const mongoose = require('mongoose');
const MemberSchem = mongoose.Schema({
  id: { type: String },
  guild: { type: String },
  registeredAt: { type: Number, default: Date.now() }
});

const model = mongoose.model("Member", MemberSchem);

module.exports = model;/*  */