require("dotenv").config();
const {
  Client,
  Events,
  IntentsBitField,
  User,
  Message,
  messageLink,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
  ],
});
const windwhistle =
  "In Tekken 8 there will be a new character named Windwhistle. He practices an MMA style fusion of BJJ and Mystical Tai Chi. He is 38 years old. He has a sexy skinny twunky body. He has defined very thin and abdomen. He has sexy muscular collar bone. He has a tight waist. His calves are defined but not huge. His nipples are a subtle dark apricot hue. His nipples are small and turn erect on final round. He was born in Cuba but he grew up in southern China. In his adulthood, he travelled to Northern Alberta to work in the tar sands. His areolas is large relative to other male characters. His skin is a lightly bronzed color. On his left forearm there is a tattoo of a sheep. On his right forearm there is a tattoo of a wolf. His cheekbones are very defined. His jaw is very defined. He has deep eye sockets in a sexy way. His eyes are beautiful. His eyes are shining. His left eye is a bloody burgundy hue. His right eye is a deep sea indigo hue. His hair goes down to his neck. His hair is dark and curly. His hair has a lime green streak that goes down the front. He is clean shaven. He loves techno music. He loves EDM music. He loves DNB music. He loves experimental drugs. He goes into full power fury mode after taking experimental drugs. His breasts are large and tender. His breasts are large enough to be firmly grabbed by other human adult males. His cock is 3 long flaccid. His cock is 7 long erect. His cock has a 3 girth flaccid. His cock has a 4 girth erect. His balls are average sized. His balls sag slightly in an alluring way. His ass is large and firm. His ass is spanked and red. He loves for his big ass to be spanked red. He wears black bootleg timberlands. He wears tall black socks that go up to his knees. He wears black cargo shorts that are tight and accentuate his big ass.";

const conjunctions = [
  "a",
  "an",
  "and",
  "or",
  "but",
  "the",
  "or",
  "nor",
  "yet",
  "so",
  "you",
  "I",
  "I'll",
  "of",
  "my",
  "am",
  "in",
];

const bresidents = [
  "George Washington",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "James Monroe",
  "John Quincy Adam",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler",
  "James K. Polk",
  "Zachary Taylor",
  "Millard Fillmore",
  "Franklin Pierce",
  "James Buchanan",
  "Abraham Lincoln",
  "Andrew Johnson",
  "Ulysses S. Grant",
  "Rutherford B. Hayes",
  "James Garfield",
  "Chester A. Arthur",
  "Grover Cleveland",
  "Benjamin Harrison",
  "Grover Cleveland",
  "William McKinley",
  "Theodore Roosevelt",
  "William Howard Taft",
  "Woodrow Wilson",
  "Warren G. Harding",
  "Calvin Coolidge",
  "Herbert Hoover",
  "Franklin D. Roosevelt",
  "Harry S. Truman",
  "Dwight D. Eisenhower",
  "John F. Kennedy",
  "Lyndon B. Johnson",
  "Richard M. Nixon",
  "Gerald R. Ford",
  "James Carter",
  "Ronald Reagan",
  "George H. W. Bush",
  "William J. Clinton",
  "George W. Bush",
  "Barack Obama",
  "Donald J. Trump",
  "Joe Biden",
];

client.on("ready", (c) => {
  console.log(`👩‍🍳${c.user.tag} is online. I'm your Bresident.`);
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "breetings") {
    interaction.reply("Breetings!");
  }
  if (interaction.commandName === "genius") {
    interaction.reply(
      `${interaction.user.username}, you're a genius, and you worked so hard on this!`
    );
  }
  if (interaction.commandName === "windwhistle") {
    interaction.reply(windwhistle);
  }
  // if (interaction.commandName ==='bresify') {
  //     string_to_bresify = firstparameter;
  //     final_string = string_to_bresify.replaceAll(/[A-Z]/g,'B');
  //     interaction.reply(final_string);
  // };
  if (interaction.commandName === "brandom") {
    random_bres = Math.floor(Math.random() * 45);
    choosen_bres = bresidents[random_bres];
    final_string = choosen_bres.replaceAll(/[A-Z]/g, "B");
    interaction.reply(final_string);
  }
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  const filter = (reaction, user) => reaction.emoji.name === "🅱️";
  const collector = message.createReactionCollector({
    filter,
    max: 1,
    time: 60_000,
    errors: ["time"],
  });

  collector.on("collect", (b) => {
    string_to_bresify = message.content;
    temp_array = string_to_bresify.split(" ");
    let bresified_array = [];
    for (let i = temp_array.length - 1; i >= 0; i--) {
      if (conjunctions.includes(temp_array[i])) {
      } else {
        if (temp_array[i].match(/^[aeiou]/)) {
          temp_array[i] = temp_array[i].replace(/^/, "b");
        } else {
          temp_array[i] = temp_array[i].replace(/^./, "b");
        }
      }
    }
    b_reply = temp_array.join(" ");
    message.reply(b_reply);
    console.log(`Collected ${b.emoji.name}`);
  });
  collector.on("end", (collected) =>
    console.log(`Collected ${collected.size} items`)
  );
});

client.on("messageCreate", (message) => {
  const filter = (reaction, user) => reaction.emoji.name === "🧠";
  const collector = message.createReactionCollector({
    filter,
    max: 1,
    time: 60_000,
    errors: ["time"],
  });

  collector.on("collect", (b) => {
    if (message.author.id == "276121513412001792") {
      message.reply(`Mom, congratulating yourself is embarassing.`);
    } else {
      message.reply(
        `${message.author}, you're a genius, and you worked so hard on this!`
      );
    }
  });
  collector.on("end", (collected) =>
    console.log(`Collected ${collected.size} items`)
  );
});

client.login(process.env.TOKEN);
