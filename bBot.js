(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "renatorc3";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.
         
        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Sagaz Bot",
      language: "portuguese",
      chatLink: "https://cdn.jsdelivr.net/gh/renatorc3/Sagaz-Electro-Bot/pt-BR.json",
      scriptLink: "https://cdn.jsdelivr.net/gh/renatorc3/Sagaz-Electro-Bot/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 1,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 5,
      usercommandsEnabled: true,
      thorCommand: true,
      thorCooldown: 10,
      skipPosition: 0,
      skipReasons: [
      ["tema", "seu vídeo não se encaixa nos temas da sala, digite !temas para ver os temas permitidos "],
      ["historico", "seu vídeo já está no histórico da sala. "],
      ["indisponivel", "seu vídeo está indisponivel. "]
      ],
      afkpositionCheck: 10,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Mensagem do dia não definida, intervalo padrão = 5",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "" ,
      themeLink: "" ,
      fbLink: "http://goo.gl/fmAu02" ,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Não esqueça de dar uma olhada nas nossas regras antes de entrar na fila de DJs! ➲ ",
      "Venha fazer parte do nosso grupo no facebook! ➲ ",
      "Digite !comandos para receber um link com a lista de comandos completa!",
      "Se um vídeo receber mais votos negativos que positivos, ele será pulado instantâneamente"],
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        gênero: ""
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://cdn.jsdelivr.net/gh/renatorc3/Sagaz-Electro-Bot/basicBot.js", extend);

}).call(this);
