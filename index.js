// first of all u must install these 1)https://code.visualstudio.com/ 2)https://nodejs.org/en/
// make a folder for your bot example fivem bot
// after installing these apps open command prompt(cmd) and go to your folder for example cd Desktop/fivem bot
// write npm init and then press enter to all(including the yes in the end)
// then you have to install the packages that we need to use 
// run npm i discord.js
// after installing the package go to visual studio code open the fivem bot folder create a file named index.js and paste the code from here
// open this site (https://discord.com/developers/applications) and make a new application and make it as a bot
// if you want to add the bot in your server just go here (https://discordapi.com/permissions.html) select the administrator button and put in the client id your bots id
// then copy the link and select your server 
// Video: https://www.youtube.com/watch?v=j_sD9udZnCk
// Join here for help: https://discord.gg/VTdeXwUQKX || https://discord.gg/7seSqGm6mC
// Install npm's : npm i npmnamehere
const Discord = require("discord.js") //npm i discord.js
const bot = new Discord.Client()
const fivem = require("fivem") //npm i fivem
const server = new fivem.Server("IP:PORT") //51.195.61.51:30120 and not connect fivem.papakrp.eu
const prefix = "!" // You can change the prefix
const servername = "Test Roleplay" // Add yours server name here
bot.on("ready", () => {
    console.log("Status bot ON. | Made by Papak†#9999")
})

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)){
        let args = message.content.slice(prefix.length).split(/ +/);
        let cmd = args.shift().toLowerCase();
        if(cmd === "status"){
            // we will use the fivem package
            server.getPlayers().then(players => 
           server.getMaxPlayers().then(maxplayers =>
            message.channel.send({embed: {
                color: 3447003, 
                title: `Server Status for ${servername}`,
                description: `Players: ${players}/${maxplayers}`,
                timestamp: new Date(),
                footer: {
                  text: `Server Status Made by Papak†#9999`
                }
              } 
            })
            )
            )
        }
    } // end of prefix function
})
bot.login("token here") // you will find it at (https://discord.com/developers/applications)
