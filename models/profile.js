const mongoose = require('mongoose');

const ProfileSchem = mongoose.Schema({
  userid: { type: String, require: true, unique: true },
  guildid: { type: String, require: true },
  money: { type: Number },
  energy: { type: Number },
  job: { type: Number },
});

const model = mongoose.model("Profile", ProfileSchem);

module.exports = model