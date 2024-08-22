require ('dotenv').config();
 const {REST,routes, Routes} = require('discord.js');


 const commands = [
    
    {
        name: 'breetings',
        description: 'replies with 🅱️',


    },
    {
        name: 'genius',
        description: 'You are a genius and you worked so hard on this.',


    },
    {
        name: 'windwhistle',
        description: 'In Tekken 8,',


    },
    // {
    //     name: 'bresify',
    //     description: 'Creates an entire brentence.',
    //     options: [
    //         {
    //             type: "STRING",
    //             name: "text",
    //             description: "sentence to bresify",
    //             required: true
    //         }
    //     ]

    // },
    {
        name: 'brandom',
        description: 'Creates a random bresident.',


    },
 ];

 const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

 (async()=>{
    try{
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        );
        console.log('Slash commands were successfully registered!');

    }catch (error){
        console.log(`There was an error: ${error}`);
    }

 })();