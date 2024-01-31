const { SlashCommandBuilder } = require("discord.js")

module.exports =
{
	cooldown: 5,
	category: "utility",
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("List of Commands"),

	async execute(interaction)
	{
		await interaction.reply({ content: "List of Commands:\n\n/help - Prints this list of commands.\n/characters - Prints list of characters.", ephemeral: true })
	},
}