require('dotenv').config();
var level = require('level').Level;

var db = new level('db');

function dbDel(key) {
    return new Promise((resolve, reject) => {
        db.del(key, (err) => {
            resolve({ err });
        })
    })
}
function dbPut(key, val) {
    return new Promise((resolve, reject) => {
        db.put(key, val, (err) => {
            resolve({ err });
        })
    })
}
function dbGet(key) {
    return new Promise((resolve, reject) => {
        db.get(key, (err, data) => {
            resolve({ err, data });
        })
    })
}
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions
    ]
})

client.commands = new Collection();
client.commandArray = [];
client.buttons = new Collection();
// client.guilds.fetch('0').then(guild=>{
//     guild.publicUpdatesChannel
// })
const fns = { put: dbPut, get: dbGet, del: dbDel }
const functionFolders = fs.readdirSync('./functions');
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync('./functions/' + folder).filter(file => file.endsWith('.js'));
    for (const file of functionFiles) require('./functions/' + folder + '/' + file)(client, fns);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();

client.login(token);