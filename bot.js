const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("532289923555000340")
setInterval(function() {
channel.send(`! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥! Pierre 🍻🔥`);
}, 30)
})

client.login(process.env.BOT_TOKEN);