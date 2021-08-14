onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:healthometer') {
        event.server.schedule(5, event.server, function (callback) {
            callback.server.runCommandSilent(`tellraw @a "${event.player.getHealth()}"`);
            callback.server.runCommandSilent(`tellraw @a "max: ${event.player.getMaxHealth()}"`);
            // let command =
            //     `execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:iron_golem ${event.player.x} ${event.player.y} ${event.player.z}`
        })
    }
    if (event.item.id == 'minecraft:stick') {
    // event.server.schedule(5, event.server, function (callback) {
    //     let command = `execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:iron_golem ${event.player.x} ${event.player.y} ${event.player.z}`
    //     callback.server.runCommandSilent(command);
    // })
        event.server.schedule(5, event.server, function (callback) {
            let command = 
            `execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:iron_golem ${event.player.x} ${event.player.y} ${event.player.z}`
            callback.server.runCommandSilent(command);
        })
    // if (!event.player.isCreativeMode()) { event.item.setCount(event.item.getCount() - 1) }
    }
})


// Listen to a player event, in this case item right-click
events.listen('item.right_click', function (event) {
    // Check if item was right-clicked on client or server side
    // event.player.tell("was on the server")
    // event.server
    // if (event.player.isServer()) {
    //     // Send data {test: 123} to channel "test_channel_1". Channel ID can be any string, but it's recommended to keep it to snake_case [a-z_0-9].
    //     // Receiving side will either be client (because its fired from server).
    //     event.player.sendData('test_channel_1', {
    //         test: 123
    //     })
    //     // event.server.runCommand("say hi")
    //     event.player.tell("was on the server")
    // } else {
    //     // It's not required to use a different channel ID, but it's recommended.
    //     // Receiving side will either be server (because its fired from client).
    //     event.player.sendData('test_channel_2', {
    //         test: 456
    //     })
    //     event.player.tell("was on the client")
    // }
})

// Listen to event that gets fired when network packet is received from server.
events.listen('player.data_from_server.test_channel_1', function (event) {
    log.info(event.data.get('test').asInt()) // Prints 123
})

// Listen to event that gets fired when network packet is received from client.
events.listen('player.data_from_client.test_channel_2', function (event) {
    log.info(event.data.get('test').asInt()) // Prints 456
})