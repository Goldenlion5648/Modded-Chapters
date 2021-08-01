// priority: -1
//interactio
onEvent('recipes', e => {
    for (let g of greenBlocks) {
        if (g == "pickletweaks:green_cobblestone") {
            continue
        }
        e.custom({
            "type": "interactio:block_explode",
            "input": {
                "block": `${g}`
            },
            "output": {
                "type": "block",
                "entries": [
                    {
                        "result": {
                            "block": `${g}`
                        },
                        "weight": 1
                    }
                ],
                "empty_weight": 4
            }
        })
    }

    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": "pickletweaks:green_cobblestone"
        },
        "output": {
            "type": "block",
            "entries": [
                {
                    "result": {
                        "block": `minecraft:gravel`
                    },
                    "weight": 7
                },
                {
                    "result": {
                        "block": `excompressum:compressed_gravel`
                    },
                    "weight": 2
                },
                {
                    "result": {
                        "block": `minecraft:sand`
                    },
                    "weight": 7
                },
                {
                    "result": {
                        "block": `excompressum:compressed_sand`
                    },
                    "weight": 2
                }
            ],
            "empty_weight": 4
        }
    })
/*
    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": "minecraft:gravel"
        },
        "output": {
            "type": "block",
            "entries": [
                {
                    "result": {
                        "block": `minecraft:sand`
                    },
                    "weight": 6
                },
                {
                    "result": {
                        "block": `minecraft:gravel`
                    },
                    "weight": 3
                },
                {
                    "result": {
                        "block": `excompressum:compressed_sand`
                    },
                    "weight": 2
                }
            ],
            "empty_weight": 1
        }
    })

    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": "excompressum:compressed_gravel"
        },
        "output": {
            "type": "block",
            "entries": [
                {
                    "result": {
                        "block": `excompressum:compressed_sand`
                    },
                    "weight": 4
                },
                {
                    "result": {
                        "block": `excompressum:compressed_gravel`
                    },
                    "weight": 2
                }
            ],
            "empty_weight": 1
        }
    })
    
    */
    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": "kubejs:wet_cobblestone"
        },
        "output": {
            "type": "block",
            "entries": [
                {
                    "result": {
                        "block": `minecraft:clay`
                    },
                    "weight": 9
                },
                {
                    "result": {
                        "block": `kubejs:wet_cobblestone`
                    },
                    "weight": 1
                }
            ],
            "empty_weight": 1
        }
    })

    e.custom({
        "type": "interactio:item_explode",
        "inputs": [
            {
                "item": "minecraft:sand",
                "count": 1
            },
            {
                "item": "minecraft:gravel",
                "count": 1
            },
            {
                "item": "minecraft:clay",
                "count": 1
            }
        ],
        "output": {
            "entries": [
                {
                    "result": {
                        "item": "tconstruct:seared_brick",
                        "count": 5
                    },
                    "weight": 4
                }
            ],
            "empty_weight": 0,
            "rolls": 1
        }
    }
)


    var dropSelf = [
        "minecraft:gravel",
        "minecraft:sand",
        "excompressum:compressed_sand",
        "excompressum:compressed_gravel",
        "minecraft:clay"
    ]

    dropSelf.forEach(block => {
        e.custom({
            "type": "interactio:block_explode",
            "input": {
                "block": `${block}`
            },
            "output": {
                "type": "item",
                "entries": [
                    {
                        "result": {
                            "item": `${block}`
                        },
                        "weight": 6
                    }
                ],
                "empty_weight": 2,
            }
        })
    })
})