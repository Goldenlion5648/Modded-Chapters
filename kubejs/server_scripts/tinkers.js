
//mostly moved to craft tweaker
onEvent('recipes', e => {




    // e.custom({
    //     "type": "tconstruct:melting_fuel",
    //     "fluid": {
    //         "name": "kubejs:liquid_green",
    //         "amount": 50
    //     },
    //     "duration": 40,
    //     "temperature": 700
    // })

    e.remove({ id: "tconstruct:smeltery/melting/clay/terracotta" })

    // e.custom({
    //     "type": "tconstruct:melting",
    //     "ingredient": {
    //         "item": "minecraft:green_glazed_terracotta"
    //     },
    //     "result": {
    //         "fluid": "kubejs:liquid_green",
    //         "amount": 12
    //     },
    //     "temperature": 200,
    //     "time": 10
    // })

    // e.custom({
    //     "type": "tconstruct:modifier",
    //     "inputs": [
    //         {
    //             "tag": "forge:wither_bones"
    //         },
    //         {
    //             "tag": "forge:ingots/copper"
    //         },
    //         {
    //             "tag": "forge:wither_bones"
    //         },
    //         {
    //             "item": "minecraft:tnt"
    //         }
    //     ],
    //     "tools": {
    //         "tag": "tconstruct:modifiable/melee"
    //     },
    //     "slots": {
    //         "upgrades": 1
    //     },
    //     "result": {
    //         "name": "tconstruct:severing",
    //         "level": 1
    //     },
    //     "max_level": 2
    // })


    // e.custom({
    //     "type": "tconstruct:entity_melting",
    //     "entity": {
    //         "types": [
    //             "minecraft:creeper"
    //         ]
    //     },
    //     "result": {
    //         "fluid": "kubejs:liquid_green",
    //         "amount": 50
    //     },
    //     "damage": 2
    // })


})