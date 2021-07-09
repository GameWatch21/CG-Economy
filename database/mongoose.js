const Discord = require("discord.js");
const config = require("./../config.json");
const userSchema = require("./schema/user.js"),
guildSchema = require("./schema/guild.js"),
memberSchema = require("./schema/member.js"),
logSchema = require("./schema/log.js");
profileSchema = require("./schema/profile.js");


//Create/find users Database
module.exports.fetchUser = async function(key){

    let userDB = await userSchema.findOne({ id: key });
    if(userDB){
        return userDB;
    }else{
        userDB = new userSchema({
            id: key,
            registeredAt: Date.now()
        })
        await userDB.save().catch(err => console.log(err));
        return userDB;
    }
};

//Create/find Guilds Database
module.exports.fetchGuild = async function(key){

    let guildDB = await guildSchema.findOne({ id: key });

    if(guildDB){
        return guildDB;
    }else{
        guildDB = new guildSchema({
            id: key,
            registeredAt: Date.now()
        })
        await guildDB.save().catch(err => console.log(err));
        return guildDB;
    }
};

//Create/find Members Database
module.exports.fetchMember = async function(userID, guildID){

    let memberDB = await memberSchema.findOne({ id: userID, guildID: guildID });
    if(memberDB){
        return memberDB;
    }else{
        memberDB = new memberSchema({
            id: userID,
            guildID: guildID,
            registeredAt: Date.now()
        })
        await memberDB.save().catch(err => console.log(err));
        return memberDB;
    };
};

//Create/find Log in Database
module.exports.createLog = async function(message, data){

    let logDB = new logSchema({
        commandName: data.cmd.name,
        author: { username: message.author.username, discriminator: message.author.discriminator, id: message.author.id },
        guild: { name: message.guild ? message.guild.name : "dm", id: message.guild ? message.guild.id : "dm", channel: message.channel ? message.channel.id : "unknown" },
        date: Date.now()
    });
    await logDB.save().catch(err => console.log(err));
    return;

};
module.exports.fetchProfile = async function(userID, guildID){

    let proDB = await memberSchema.findOne({ id: userID, guildID: guildID });
    if(proDB){
        return proDB;
    }else{
        proDB = new memberSchema({
            userid: userID,
            guildid: guildID,
            money: 0,
            energy: 100,
            job: 0,
            registeredAt: Date.now()
        })
        await proDB.save().catch(err => console.log(err));
        return proDB;
    };
};