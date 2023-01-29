# LobsterBot

LobsterBot is a simple free and open source discord bot

# Host
1. Go to [Discord Developers](https://discord.com/developers)
2. Create an application
3. Open the application and go to the bot tab
4. Create a bot
5. Reset the token and copy it
6. Go to OAuth2 > Url generator
7. Select bot and commands.create
8. Enable all the permissions you want
9. Copy the link
10. Copy the client id on the OAuth page
11. Enable developer settings in discord if you havent already done that
12. Copy your server id
13. Create a .env in the bot
14. Type
    ```
    token=BOT TOKEN
    clientId=CLIENT ID
    guildId=SERVER ID
    TESTING=true
    ```
    profanity filter has moved to /profanity-toggle
15. open a terminal
16. type `npm install`
17. type `npm i -g pm2`
18. run `pm2 start ecosystem.config.js`
19. go to the link you copied and add LobsterBot to your server

## Please report any bugs in the issues tab

![](https://bdc2020.o0bc.com/wp-content/uploads/2021/11/blue-lobster-618af4d323eb6.jpeg)