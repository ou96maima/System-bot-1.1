const { SlashCommandBuilder } = require("discord.js");
const testschema = require("../../Schemas/test");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("delete-schema")
    .setDescription("esting a schema"),
  async execute(interaction) {
    const data = await testSchema.find();

    await data.forEach(async (d) => {
      await testSchema.deleteOne({ name: d.name });
    });

    await interaction.reply({ content: `I deleted the values` });
  },
};
