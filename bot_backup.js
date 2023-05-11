const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

function randomMessage(){
    var randomNumber = Math.round(Math.random()*11);
    switch(randomNumber){
        case 0: return 'What did the buffalo say to his son when he left for college? Bison.';
        case 1: return 'What do you call a fake noodle? An Impasta.';
        case 2: return 'Can February March? No, but April May.';
        case 3: return 'Wanna hear a joke about paper? Nevermind, it’s tearable.';
        case 4: return 'Wanna hear a joke about construction? I’m still working on it.';
        case 5: return 'How do you tell the difference between a crocodile and an alligator? You will see one later and one in a while.';
        case 6: return 'What’s brown and sticky? A stick.';
        case 7: return 'A steak pun is a rare medium well done.';
        case 8: return 'I went to buy some camouflage trousers the other day, but I couldn’t find any.';
        case 9: return 'What kind of shoes does a thief wear? Sneakers';
        case 10: return 'Joke? Look in the mirror!'
    }
}

function randomNum(max) {
  if (max > 20)
    max = 20
  var strToNum = parseInt(max, 10)
  var randomNumber = Math.floor(Math.random()* strToNum)+ 1;
  if (strToNum > 20)
    strToNum = 20
  switch (strToNum) {
    case 1: return `Rolled a ${strToNum} sided dice?? How does this work? The result is: ${randomNumber}`;
    case 2: return `Rolled a ${strToNum} sided dice somehow.. It's basically a coin but whatever. The result is: ${randomNumber}`;
    case 3: return `Rolled a ${strToNum} sided dice. Is that a pyramid? The result is: ${randomNumber}`;
    case 4: return `Rolled a ${strToNum} sided dice. A pyramid basically. The result is: ${randomNumber}`;
    case 5: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 6: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 7: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 8: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 9: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 10: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 11: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 12: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 13: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 14: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 15: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 16: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 17: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 18: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 19: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
    case 20: return `Rolled a ${strToNum} sided dice. The result is: ${randomNumber}`;
  }
}

client.on("message", (message) => {

  if(message.author.bot) return;

const args2 = message.content.slice().trim().split(/ +/g);
if((args2[0].toLowerCase() == 'i\'m' || args2[0].toLowerCase() == 'im') && (args2[1])){
                message.channel.send(`Hi ${args2.slice(1).join(' ')}, I'm dad!`);
        }

        if (message.content.startsWith("sofa")) {
      message.channel.send("yoinkies!");
    }
});

client.on("message", async message => {

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift();

  if (!message.content.startsWith(config.prefix)) return;

  if (command === "help") {
    message.channel.send("Here are my commands: `p!say [words], p!ping, p!purge [number], p!joke, p!roll [number], p!creator`")
  } else

  if (command === "oi") {
    message.channel.send("Hey! o/");
  } else

  if (command === "sofa") {
    message.channel.send("yoinkies");
  } else

  if (command === "if i say hello") {
    message.channel.send("I say world!");
  } else

  if (command === "spank") {
    message.channel.send("Roy has been spanked");
  } else

  if (command === "creator") {
    message.channel.send("My creator is `Frankie#7903`! Message him for any questions, he's friendly!")
  } else

  if(command === "say"){
    let text = args.slice().join(" ");
    message.delete();
    message.channel.send(text);
  } else

  if (command === "nick") {
  let text = args.join(' ');
  try {
    const guildMember = await message.fetchMember(this.user); 
    await guildMember.setNickname(text);
    message.channel.send(`My new nickname is ${user.username}!`);
  } catch (error)  {
    console.error(error);
  }
  } else

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`).catch(console.error);
  } else

  if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  } else

  if (command === "joke") {
    message.reply(randomMessage());
  } else

  if (command === "roll") {
    let text = args.join(' ');
    await message.channel.send(randomNum(text));
  }

  else return message.reply("I don't have that command in my list, try p!help for a list of commands.")

  });

client.login(config.token);