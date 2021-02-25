//Warning: discord.js v.11 is required, v.12 not support user tokens.
//To install discord.js v.11: npm install discord.js@11

//main func
const Discord = require("discord.js");
const user = new Discord.Client();
const config = require("./config.json");
//Emargement channel from IGM Discord
let channel = ["773863921206558761"];
let usertoken = config.token;
user.login(usertoken);
user.on("ready", ready => {
  user.on("message", message => {
    if (channel.includes(message.channel.id) ) {
      message.embeds.forEach(m => {
        //test if this is the bot "appel" message
        if(m.title.toString().includes("Appel demandé")){
          //to be hidden as a bot
          setTimeout(function () {
            message.react("🙋");
            console.log("reaction added !")
          }, 3000);
        }
      })
    }
  });
});