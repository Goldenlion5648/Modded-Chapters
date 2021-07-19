// function clearLag(server) {
//     // Get a list of all entities on server with filter that only returns items
//     var itemList = server.getEntities('@e[type=item]')
//     // Create new local map for item counters
//     var lastResult = utils.newCountingMap()
//     // Clear old result lists
//     lastClearLagResult.clear()
//     lastTotalClearLagResult.clear()
//     // Iterate over each entity in itemList and add item counters
//     itemList.forEach(function (entity) {
//         if (!whitelist.test(entity.item)) {
//             // Get the name of item
//             var key = entity.item.name
//             // Add to entity count
//             lastResult.add(key, 1)
//             // Add to total item count
//             lastTotalClearLagResult.add(key, entity.item.count)
//             // Kill the item entity
//             entity.kill()
//         }
//     })
// }

// events.listen('command.run', function (event) {
//     if (!(event.parseResults && event.parseResults.reader && event.parseResults.context))
//         return;

//     var command = event.parseResults.reader.getString();
//     console.info(event.parseResults.context.source.field_197041_c());

//     for (f in event.parseResults.context.source) {
//         console.info(f);
//         console.info(event.parseResults.context.source[f]);
//     }
//     if (command == '/elysium') {
//         // dimensions:2172E38C4DD9C489
//         event.cancel();
//     }


//     return;
// });

// events.listen('command.registry', function (event) {
//     // Register new OP command /clearlag, that instantly runs clearlag
//     event
//         .create('clearlag')
//         .op()
//         .execute(function (sender, args) {
//             clearLag(sender.server)
//         })
//         .add()

//     // Register new non-OP command /clearlagresults, that displays stats of all removed items from previous /clearlag
//     event
//         .create('clearlagresults')
//         .execute(function (sender, args) {
//             sender.tell([text.lightPurple('[ClearLag]'), ' Last clearlag results:'])

//             lastClearLagResult.forEach(function (entry) {
//                 var total = lastTotalClearLagResult.get(entry.key)

//                 if (entry.value == total) {
//                     sender.tell([text.gold(entry.key), ': ', text.red(entry.value)])
//                 } else {
//                     sender.tell([text.gold(entry.key), ': ', text.red(entry.value), ' entities, ', text.red(total), ' total'])
//                 }
//             })
//         })
//         .add()
// })

var customCommands = {
    'myCustomCommand': function (player, cmdParts, event) {
        console.info(player);
        console.info(cmdParts);
        console.info(event);
        event.cancel();
    }
};

events.listen('command.run', function (event) {

    console.log(`ran something ${event}`)
    // return
    // if (!event.parseResults
    //     || !event.parseResults.reader
    //     || !event.parseResults.context
    //     || !event.parseResults.context.source)
    //     return;

    var player = event.parseResults.context.source.func_197022_f();
    if (!player)
        return;

    var command = event.parseResults.reader.getString();
    var cmdParts = command.substr(1).split(' ');
    if (customCommands[cmdParts[0]])
        customCommands[cmdParts[0]](
            event.server.getPlayer(player.entity),
            cmdParts,
            event
        );
});