const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', function () {
  console.log(`${client.user.tag} est connecté !`);
});

client.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');
  }
  else (!message.content.startsWith(prefix) || message.content.startsWith(prefix));
  message.channel.send('test');
});

client.login(token);
