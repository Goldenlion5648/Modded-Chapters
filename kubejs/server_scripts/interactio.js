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
    // e.custom({
    //     "type": "interactio:block_explode",
    //     "input": {
    //         "block": "minecraft:sand"
    //     },
    //     "output": {
    //         "type": "block",
    //         "entries": [
    //             {
    //                 "result": {
    //                     "block": `minecraft:glass`
    //                 },
    //                 "weight": 3
    //             }
    //         ],
    //         "empty_weight": 1
    //     }
    // })
    //block to items
    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": "minecraft:cobweb"
        },
        "output": {
            "type": "item",
            "entries": [
                {
                    "result": {
                        "item": "exnihilosequentia:silkworm",
                        "count": 1
                    },
                    "weight": 1
                },
                {
                    "result": {
                        "item": "minecraft:string",
                        "count": 2
                    },
                    "weight": 3
                }
            ],
            "empty_weight": 2
        }
    })

    e.custom({
        "type": "interactio:item_fluid_transform",
        "inputs": [
            {
                "item": "tconstruct:greenheart_wood",
                "count": 1,
                "return_chance": 0.0
            }
        ],
        "fluid": {
            "fluid": "kubejs:liquid_green"
        },
        "output": {
            "entries": [
                {
                    "result": {
                        "item": "minecraft:sugar_cane",
                        "count": 3
                    },
                    "weight": 7
                }
            ],
            "empty_weight": 0,
            "rolls": 1
        },
        "consume_fluid": 1.0
    }
    )
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
                    "weight": 3
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
                        "item": "tconstruct:grout",
                        "count": 4
                    },
                    "weight": 4
                }
            ],
            "empty_weight": 0,
            "rolls": 1
        }
    })

    e.custom({
        "type": "interactio:item_explode",
        "inputs": [
            {
                "item": "tconstruct:grout",
                "count": 3
            }
        ],
        "output": {
            "entries": [
                {
                    "result": {
                        "item": "tconstruct:seared_brick",
                        "count": 4
                    },
                    "weight": 4
                }
            ],
            "empty_weight": 0,
            "rolls": 1
        }
    })


    var dropSelf = [
        "minecraft:gravel",
        // "minecraft:sand",
        "excompressum:compressed_sand",
        "excompressum:compressed_gravel",
        "minecraft:clay"
    ]

    e.custom({
        "type": "interactio:block_explode",
        "input": {
            "block": `minecraft:sand`
        },
        "output": {
            "type": "item",
            "entries": [
                {
                    "result": {
                        "item": `minecraft:sand`
                    },
                    "weight": 6
                },
                {
                    "result": {
                        "item": `quark:clear_shard`
                    },
                    "weight": 2
                }
            ],
            "empty_weight": 1,
        }
    })
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