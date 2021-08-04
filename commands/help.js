const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
    .setTitle(`Pomoc :face_with_raised_eyebrow: `)
    .setColor(0xffffff)

    .addFields(
		{ name: '.help', value: 'Pokazuje Tą Komende', inline: true },
		{ name: '.ping', value: 'Pokazuje Twój Ping', inline: true },
		{ name: '.ddos', value: 'Robi Atak DDOS', inline: true },
        { name: 'Wkrótce', value: 'Wiecej Kommand Wkrótce', inline: true },
        { name: 'Wkrótce', value: 'Wiecej Kommand Wkrótce', inline: true },
        { name: 'Wkrótce', value: 'Wiecej Kommand Wkrótce', inline: true },
	)
    message.author.send(embed);
    },
};