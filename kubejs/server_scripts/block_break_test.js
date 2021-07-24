
function spawnCrystals(event) {
    var wait = 10
    var timesToRun = 5
    for (let j = 0; j < timesToRun; j++) {

        // event.server.scheduleInTicks(3 + wait * j, event.server, function (callback) {
        // setblock   structure_block{mode:"LOAD",posY:10,sizeX:0,posZ:5,integrity:1.0f,powered:0b,name:"rework:water_ore_struct"}
        // })
        let command =
            `execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.pos.x} ${event.block.pos.y - 2} ${event.block.pos.z + j} structure_block{mode:"LOAD",posY:${10 + 12 * j},sizeX:0,posZ:${4*j},integrity:${1-(j/timesToRun)}f,powered:0b,name:"rework:water_ore_struct"}`

        event.server.runCommandSilent(command);
        // event.server.scheduleInTicks(3 + wait * j, event.server, function (callback) {
        command =
            `execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.pos.x - 1} ${event.block.pos.y - 2} ${event.block.pos.z + j} minecraft:redstone_block`
        // 
        event.server.runCommandSilent(command);
        event.server.runCommandSilent(`tellraw @a "run number ${j}" `);
        // }
    }
    event.server.scheduleInTicks(5, event.server, function (callback) {
        callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run fill ${event.block.pos.x} ${event.block.pos.y - 2} ${event.block.pos.z} ${event.block.pos.x - 1} ${event.block.pos.y - 2} ${event.block.pos.z + timesToRun} kubejs:ocean_floor`);
    })
    // })
    // await new Promise(r => setTimeout(r, 500));
    // event.server.scheduleInTicks(6 + wait * i, event.server, function (callback) {
    //     let command =
    //         `execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.pos.x - 1} ${event.block.pos.y - 2} ${event.block.pos.z} minecraft:redstone_block`

    //     callback.server.runCommandSilent(command);
    //     callback.
    // })
    // event.server.scheduleInTicks(10 + wait * i, event.server, function (callback) {
    //     let command =
    //         `execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.pos.x - 1} ${event.block.pos.y - 2} ${event.block.pos.z} kubejs:ocean_floor`

    //     callback.server.runCommandSilent(command);

    //     command =
    //         `execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.pos.x} ${event.block.pos.y - 2} ${event.block.pos.z} kubejs:ocean_floor`
    //     callback.server.runCommandSilent(command);
    // })
}

function effectBasedOnDim(){
    
}


onEvent('block.break', event => {
    // event.cancel()
    console.log(event.block)
    console.log("id " + event.block.id)
    // console.log("pos " + event.block.position)
    console.log("pos " + event.block.pos.x)
    console.log("pos " + event.block.pos.y)
    // event.server.schedule(5, event.server, function (callback) {
    //     // let command =
    //     //     `tellraw @a "nice"`
    //     // callback.server.runCommandSilent(command);
    // })
    // return
    // if (event.block.id == 'kubejs:water_crystal_trigger') {
    //     event.server.schedule(5, event.server, function (callback) {
    //         let command =
    //             `execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:iron_golem ${event.player.x} ${event.player.y} ${event.player.z}`
    //         callback.server.runCommandSilent(command);
    //     })
    // }
    if (event.block.id == 'kubejs:water_crystal_trigger') {
        spawnCrystals(event)
    }
    return
})

    // effects.forEach(effect => {
    //     if (effect.heightCondition(event.player.y, effect.verticalLimit) && effect.dimensionCondition(event.player.getWorld().dimension, alfWorld)) {
    //         // if (effect.cancelsTag.length > 0) {
    //         //     effect.cancelsTag.forEach(tag => {
    //         //         if (tag == '*') {
    //         //             event.player.tags.clear()
    //         //         } else {
    //         //             event.player.tags.remove(tag)
    //         //         }
    //         //     })
    //         // }
    //         // if (!event.player.tags.contains(effect.tag)) {
    //         event.player.tags.remove(effect.tag)
    //         event.player.tags.add(effect.tag)
    //         // }
    //     }
    //     else {
    //         if (event.player.tags.contains(effect.tag)) {
    //             event.player.tags.remove(effect.tag)

    //             // Remove the notified tag
    //             event.player.tags.remove(`${effect.tag}_notified`)
    //         }
    //     }
    // })