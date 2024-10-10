const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});

// import the token from the config
const { token } = require("./config.json");

// Check if the token is missing
if (!token || token === "") {
  console.error("Token is missing in the config.json file.");
  process.exit(1);
}

// When the client is ready, run this code
client.once(Discord.Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in the client with the token
client.login(token);
