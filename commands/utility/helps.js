const { SlashCommandBuilder } = require("discord.js")

module.exports =
{
	cooldown: 5,
	category: "utility",
	data: new SlashCommandBuilder()
		.setName("helps")
		.setDescription("List of Commands!!!"),

	async execute(interaction)
	{
		await interaction.reply({ content: "List of Commands", ephemeral: true })
	},
}