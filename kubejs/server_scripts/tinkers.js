

onEvent('recipes', e => {

    


    e.custom({
        "type": "tconstruct:entity_melting",
        "entity": {
            "types": [
                "minecraft:creeper"
            ]
        },
        "result": {
            "fluid": "kubejs:liquid_green",
            "amount": 50
        },
        "damage": 2
    })


})