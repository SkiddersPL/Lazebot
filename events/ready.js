module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged As ${client.user.tag}`);
        client.user.setActivity("🔥🔥🔥");
	},
};