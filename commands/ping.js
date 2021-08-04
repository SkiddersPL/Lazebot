const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
    .setTitle(`🏓 Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    .setColor(0xffffff);
	message.author.send(embed);
    },
};