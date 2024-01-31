const { SlashCommandBuilder } = require("discord.js")

module.exports =
{
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("List of Commands"),
	async execute(interaction)
	{
		await interaction.reply("List of Commands:\n/help - Prints this list of commands.")
	},
}