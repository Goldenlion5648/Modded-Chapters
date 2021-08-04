//priority -1000

onEvent('entity.loot_tables', event => {
    
})
onEvent('block.loot_tables', event => {
    // event.addBlock(/minecraft:dirt/, table => {
    //     table.pool(pool => {
    //         pool.setUniformRolls(4, 8)
    //         pool.survivesExplosion()
    //         pool.addEntry({ type: 'minecraft:item', name: 'minecraft:diamond' })
    //     })
    // })

    //this overrides the default loot table
    event.addBlock("exnihilosequentia:infested_leaves", table => {
        table.pool(pool => {
            pool.setUniformRolls(1, 4)
            pool.addEntry({
                "type": "minecraft:item",
                "name": "botania:mana_powder",
                "conditions": [
                    {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "tag": "exnihilosequentia:crook"
                        }
                    }
                ]
            })
        })
    })

    // event.build('exnihilosequentia:infested_leaves', table => { // Build loot table manually
    //     table.pool(pool => {
    //         pool.rolls = 1 // Use one of these 3 - fixed, uniform, binominal
    //         // pool.setUniformRolls(4, 6)
    //         // pool.setBinomialRolls(4, 0.3)
    //         pool.survivesExplosion()
    //         pool.addItem('minecraft:dirt')
    //     })
    // })

    event.addBlock("kubejs:elementium_ore", table => {
        table.pool(pool => {
            pool.setUniformRolls(3, 6)
            // pool.survivesExplosion()
            // pool.randomChance()
            pool.addEntry({
                "type": "minecraft:item",
                "name": "botania:elementium_nugget"

            })
        })
    })

    event.addBlock("kubejs:wet_cobblestone", table => {
        table.pool(pool => {
            // pool.survivesExplosion()
            // pool.randomChance()
            
        })
    })

})

onEvent('recipes', event => {
    event.custom({
        "type": "exnihilosequentia:hammer",
        "results": [
            {
                "item": "tconstruct:seared_brick",
                "chance": 1.0,
                "count": 3
            }
        ],
        "input": {
            "item": "tconstruct:seared_stone"
        }
    })

    // event.custom({
    //     "type": "exnihilosequentia:crook",
    //     "results": [
    //         {
    //             "chance": 0.4,
    //             "item": "botania:mana_powder",
    //             "count": 1
    //         }
    //     ],
    //     "input": {
    //         "item": "exnihilosequentia:infested_leaves"

    //     }
    // })
})