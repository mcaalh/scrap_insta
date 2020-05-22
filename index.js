const InstaBot = require('./InstaBot');// this directly imports the index.js file
const config = require('./InstaBot/config/puppeteer.json');

const run = async () => {
    const instaBot = new InstaBot();

    const startTime = Date();

    await instaBot.initPuppeter().then(() => console.log("PUPPETEER INITIALIZED"));

    await instaBot.visitInstagram().then(() => console.log("BROWSING INSTAGRAM"));

    await instaBot.visitHashtagUrl().then(() => console.log("VISITED HASH-TAG URL"));

    await instaBot.unFollowUsers();

    await instaBot.closeBrowser().then(() => console.log("BROWSER CLOSED"));

    const endTime = Date();

    console.log(`START TIME - ${startTime} / END TIME - ${endTime}`)

};

run().catch(e => console.log(e.message));
//run bot at certain interval we have set in our config file
setInterval(run, config.settings.run_every_x_hours * 3600000);