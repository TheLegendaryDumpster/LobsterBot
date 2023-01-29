const chalk = require('chalk');
module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(chalk.bgGreenBright.black.bold('Ready!!! ' + client.user.tag + ' is logged in and online.'));
    }
}