const { EmbedBuilder } = require('discord.js');

module.exports = (client, interaction) => {

  if(interaction.customId) {
    if(interaction.customId === "technicalQuestionModal") {
      const sentEmbed = new EmbedBuilder()
        .setTitle("200")
        .setDescription("Thanks for submitting, the TAs have been notified. They may respond or put them on hold.")

      interaction.reply({embeds: [sentEmbed]})

      const channel = client.channels.cache.get('1044562104386072616');
      channel.send('there was a new question');

    }
  }

  if (!interaction.isChatInputCommand()) return;


  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    command.execute(interaction, client);
  } catch (err) {
    if (err) console.error(err);
    interaction.reply({
      content: "An error occurred while executing that command.",
      ephemeral: true,
    });
  }
};
