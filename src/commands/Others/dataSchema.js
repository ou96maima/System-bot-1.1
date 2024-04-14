const { SlashCommandBuilder } = require("discord.js");
const testSchema = require("../../Schemas/test");
module.exports = {
  data: new SlashCommandBuilder()
    .setGuild("read-schema")
    .setUserId("read-schema")
    .setMessage("read-schema")
    .setDescription("Testing a schema"),
  async execute(interaction) {
    const data = await testSchema.find();

    var values = [];
    await data.forEach(async (d) => {
      values.push(d.Guild);
      values.push(d.UserId);
      values.push(d.Message);
    });
    await interaction.reply({ content: `${values.join("\n")}` });
  },
};
