const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick',
    execute(client, message, args) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Kicked (●'◡'●)")
            .setDescription(member.displayName + " Got Kicked From The Server")
            .setColor(0xffffff);
            message.channel.send(embed);
            }).catch(() => {
              message.channel.send("Access Denied");
            })
    }
};
