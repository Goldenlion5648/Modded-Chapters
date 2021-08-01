
const enterDimensionEffect = [
    {
        dimension: "rework:greenland",
        command: "minecraft:night_vision 1000000 0"
    },
    {
        dimension: "rework:hub",
        command: "minecraft:resistance 30 0"
    },
    {
        dimension: "rework:greenland",
        command: "minecraft:resistance 5 4"
    }
]

onEvent('entity.spawned', event => {
    if (event.entity.type != 'minecraft:player') {
        return
    }
    var nbt = event.entity.getFullNBT().toString()
    // console.log("nbt " + nbt)
    if (nbt.includes(`Health:20`) == false && nbt.includes(`Dimension:"rework:hub"`)) {
        var command = `ftbquests change_progress ${event.entity.name} complete 58AA90C02045103C`
        // console.log("running " + command)
        event.server.runCommandSilent(command);
        event.server.runCommandSilent(`ftbquests change_progress @p complete 44DE69D8F4000593`);
    }


    enterDimensionEffect.forEach(effect => {
        if (nbt.includes(`Dimension:"${effect.dimension}"`)) {
            var command = `effect give ${event.entity} ${effect.command} true`
            // console.log("command " + command)
            event.server.runCommandSilent(command);
        }
    })
    // for (let key of enterDimensionEffect){
    //     console.log("key" + key);
    //     let value = enterDimensionEffect[key]
    //     console.log("value " + value);
    //     [effect, time, amp] = value.split(" ")
    //     console.log(effect, time, amp)
    //     // if (nbt.includes(`Dimension:"rework:hub"`))
    //     // {

    //     // }
    // }
    // if()
    // console.log(event.entity + " respawned")
    // // console.log("dimension: " + event.entity.Dimension)
    // var n = 
    // // console.log(n)
    // n = n
    // console.log("after:" + n)
    // console.log("has dimension" + )

})