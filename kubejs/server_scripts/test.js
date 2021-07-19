events.listen('player.chat', function (event) {
    // Check if message equals creeper, ignoring case
    // event.server.runCommand("say hi") //works
    // // if (event.message.trim().equalsIgnoreCase('creeper')) {
    //     event.server.scheduleInTicks(1, event.server, function (callback) {
    //         // Tell everyone Aw man, colored green. Callback data is the server
    //         // callback.data.tell(text.green('Aw man'))
    //         event.server.runCommandSilent(`say hi2 ${event.player}`);
    //     })
    // }
})
events.listen('block.right_click', function (event) {
    // Check if message equals creeper, ignoring case
    // event.server.runCommand(`say hi right ${event.block} ${event.player.hand}`) //works
    // if (event.message.trim().equalsIgnoreCase('creeper')) {
        // event.server.scheduleInTicks(1, event.server, function (callback) {
        //     // Tell everyone Aw man, colored green. Callback data is the server
        //     // callback.data.tell(text.green('Aw man'))
        //     event.server.runCommandSilent(`say hi2 ${event.player}`);
        // })
    // }
})