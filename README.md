# LobsterBot
Lobster bot is a simple free and open source discord bot!

**How to install**
1. Go to https://discord.com/developers and create an application, then go to bot tab and create a bot then reset the token
2. Scroll down and enable intents
3. Copy the client id and your server id
4. Reset the token and copy it
5. Create a .env file in the bot folder
6. In the .env, type:
   ```
   token=BOT TOKEN
   clientId=CLIENT ID
   guildId=SERVER ID
   ```
   replace with the things you copied
7. Add it to your server, go to OAuth2 > url generator, enable bot and commands.create, scroll down, enable all the permissions you want to give it
8. Use `npm i -g pm2`
9. To start the bot, use `pm2 start ecosystem.config.js`
