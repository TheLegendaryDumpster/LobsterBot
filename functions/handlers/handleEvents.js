const fs = require('fs');

module.exports = (client, fns)=>{
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('./events');
        for(const folder of eventFolders) {
            const eventFiles = fs.readdirSync('./events/'+folder).filter(file=>file.endsWith('.js'));
            switch(folder) {
                case "client":
                    for(const file of eventFiles) {
                        const event = require('../../events/'+folder+'/'+file);
                        if(event.once) client.once(event.name, (...args) => {event.execute(...args, client, fns)})
                        else client.on(event.name, (...args) => event.execute(...args, client, fns))
                    }
                    break;
                default:
                    break;
            }
        }
    }
}