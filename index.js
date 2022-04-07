const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYxNjI1OTg2Mzg0OTI0Njcy.Yk7t_Q.zS-YdA9WGYaqn25Au4Pm5I1m7RM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)