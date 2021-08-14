// priority: -1

onEvent('recipes', event => {
    //StructureNameHere
    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "basic",
        "id": "green_maker",
        "name": "Green Maker",
        "layout": [
            [
                "AAA",
                "AAA",
                "AAA"
            ],
            [
                "BBB",
                "BBB",
                "BBB"
            ],
            [
                "F O",
                "MEM",
                "HCH"
            ]
        ],
        "legend": {
            "A": {
                "block": "kubejs:tough_green_rock"
            },
            "B": {
                "block": "botania:green_pavement"
            },
            "G": {
                "block": "minecraft:green_glazed_terracotta"
            },
            "W": {
                "block": "tconstruct:greenheart_wood"
            },
            "I": {
                "block": "masterfulmachinery:basic_basic_port_items_input"
            },
            "F": {
                "block": "masterfulmachinery:basic_small_fluid_port_fluids_input"
            },
            "H": {
                "block": "minecraft:creeper_head"
            },
            "O": {
                "block": "masterfulmachinery:basic_basic_port_items_output"
            },
            "M": {
                "block": "kubejs:green_gem"
            },
            "E": {
                "block": "minecraft:emerald_block"
            }
        }
    })
    var outputs = []
    for(let block of greenBlocks){
        outputs.push({
            "type": "masterfulmachinery:items",
            "chance": 0.25,
            "data": {
                "item": `${block}`,
                "count": 1
            }
        })
    }
    outputs.push({
        "type": "masterfulmachinery:items",
        "chance": 0.15,
        "data": {
            "item": "minecraft:gunpowder",
            "count": 1
        }
    })
    outputs.push({
        "type": "masterfulmachinery:items",
        "chance": 0.05,
        "data": {
            "item": "minecraft:emerald",
            "count": 1
        }
    })
    outputs.push({
        "type": "masterfulmachinery:items",
        "chance": 0.1,
        "data": {
            "item": "kubejs:green_gem",
            "count": 1
        }
    })
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "green_maker",
        "controllerId": "basic",
        "ticks": 10,
        "inputs": [
            {
                "type": "masterfulmachinery:fluids",
                "data": {
                    "fluid": "kubejs:liquid_green",
                    "amount": 100
                }
            }
        ],
        "outputs": outputs
    })

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "basic",
        "id": "ocean_floor_scanner",
        "name": "Ocean Floor Scanner",
        "layout": [
            [
                "XXX",
                "XXX",
                "XXX"
            ],
            [
                "AAA",
                "AAA",
                "ACA"
            ],
            [
                "   ",
                " w ",
                "   "
            ]
        ],
        "legend": {
            "X": {
                "block": "kubejs:ocean_floor"
            },
            "A": {
                "block": "minecraft:cobblestone"
            },
            "w": {
                "block": "minecraft:emerald_block"
            }
        }
    })

    //RecipeNameHere
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "example_structure",
        "controllerId": "basic",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "tag": "minecraft:wool",
                    "count": 2
                }
            }
        ],
        "outputs": [
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": "minecraft:string",
                    "count": 4
                }
            }
        ]
    })

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "chance_this2",
        "controllerId": "basic",
        "name": "Change This",
        "layout": [
            [
                ") )",
                ") )",
                " C "
            ]
        ],
        "legend": {
            ")": {
                "tag": "botania:mystical_flowers"
            }
        }
    })

})