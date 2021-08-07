const finishedTrading = "doneTrading"

onEvent('item.entity_interact', event => {

    event.server.schedule(3, event.server, function (callback) {
        callback.server.runCommandSilent(`tellraw @p "cool ${event.target.type}"`);
        // callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run playsound minecraft:block.note_block.chime block @s ${event.block.x} ${event.block.y} ${event.block.z} 2 2`);
        // callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run particle minecraft:dust 1 1 1 2 ${event.block.x} ${event.block.y + 0.5} ${event.block.z} 0.4 0.4 0.4 10 100`);
    })

    //witch trade
    if (event.target.type == "minecraft:witch") 
    {
        console.log(event.player.data)
        if (event.target.tags.contains(finishedTrading) == false)
        {
            if (event.hand == MAIN_HAND && event.getItem().getName() == "minecraft:gunpowder")
            {
                console.log("hand was " + event.getItem())
                console.log("hand was " + event.getItem().getCount())
                event.getItem().count -= 8 //(event.getItem().getCount() - 8)
            }
        }

    }
})