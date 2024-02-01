const { SlashCommandBuilder } = require("discord.js")
const { characters } = require("../../data/characters")

module.exports =
{
	cooldown: 5,
	category: "utility",
	data: new SlashCommandBuilder()
		.setName("character")
		.setDescription("Returns a list of characters")
		.addStringOption((option) =>
			option
				.setName("name")
				.setDescription("Enter a character name to see their element")
				.setRequired(true)
				.addChoices(
					{ name: "gran/djeeta", value: "mc" },
					{ name: "katalina", value: "katalina" },
					{ name: "rackam", value: "rackam" },
					{ name: "io", value: "io" },
					{ name: "eugen", value: "eugen" },
					{ name: "rosetta", value: "rosetta" },
					{ name: "lancelot", value: "lancelot" },
					{ name: "vane", value: "vane" },
					{ name: "percival", value: "percival" },
					{ name: "siegfried", value: "siegfried" },
					{ name: "charlotta", value: "charlotta" },
					{ name: "yodarha", value: "yodarha" },
					{ name: "narmaya", value: "narmaya" },
					{ name: "zeta", value: "zeta" },
					{ name: "vaseraga", value: "vaseraga" },
					{ name: "ferry", value: "ferry" },
					{ name: "ghandagoza", value: "ghandagoza" },
					{ name: "cagliostro", value: "cagliostro" },
				)),

	async execute(interaction)
	{
		const command = interaction.options.getString("name")
		const response = { ephemeral: true, embeds: characters[command] }

		await interaction.reply(response)
	},
}