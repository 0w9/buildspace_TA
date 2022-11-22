const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ModalBuilder, SlashCommandBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Send the TAs a question."),

  async execute(interaction, client) {
    
    const modal = new ModalBuilder()
			.setCustomId('technicalQuestionModal')
			.setTitle('Ask the TAs');

		const shortErrorDescription = new TextInputBuilder()
			.setCustomId('shortErrorDescription')
			.setLabel("What's your question?")
			.setStyle(TextInputStyle.Short);

		const longErrorInfo = new TextInputBuilder()
			.setCustomId('longErrorInfo')
			.setLabel("Please enter more detais (code, etc.)")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(shortErrorDescription);
		const secondActionRow = new ActionRowBuilder().addComponents(longErrorInfo);

		modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
  },
};
