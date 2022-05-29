const {
    Client,
    CommandInteraction,
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    Message,
} = require("discord.js");

const wait = require("util").promisify(setTimeout);

module.exports = {
    name: "kick",
    description: "Kick a user based on a reason!",
    permissions: ["KICK_MEMBERS"],
    type: 1,
    options: [
        {
            name: "target",
            description: "specify user",
            required: true,
            type: "USER",
        },
        {
            name: "reason",
            description: "specify reason",
            required: true,
            type: "STRING",
        },
    ],

    run: async (client, interaction, args) => {

        const target = interaction.options.getUser("target");
        const reason = interaction.options.getString("reason");
        const member = interaction.guild.members.cache.get(target.id);


        if (!member.kickable)
            return interaction.followUp("This user can't be kick !");
        member.kick(reason);
        await interaction.channel.send(
            `User ${target} successfully kicked for: ${reason}`
        );
    },
};
