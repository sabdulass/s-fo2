﻿ const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550377128089354255")
setInterval(function() {
channel.send(`الملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو لملك سيفو 
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);