const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', function () {
  console.log(`Connecte en tant ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');
  }
  else if (!message.content.startsWith(prefix) || message.content.startsWith(prefix)) {
    message.channel.send('test');
  }
})
client.login(token);
