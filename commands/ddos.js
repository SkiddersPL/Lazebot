const Discord = require('discord.js');

module.exports = {
    name: 'ddos',
    description: 'lol ddos attack',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
    .setTitle("``That Not Work Fuck U``")
    .setColor(0xffffff);
	message.author.send(embed);
    },
};