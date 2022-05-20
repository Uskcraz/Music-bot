module.exports = {
    app: {
        px: '.',
        token: 'OTQwMjU0NDYxNTQzMjE1MjA0.G7EbCt.Jn70-f9zDgsc1aERzaIU-UGEjH8MhPUrc_Ybqo',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
