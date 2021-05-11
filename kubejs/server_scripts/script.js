// priority: 0

// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true
// settings.logSkippedRecipes = false
// settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)----------------------------')

onEvent('recipes', e => {
	// Change recipes here
    e.remove({ id: 'botania:fertilizer_dye'});
    
    // e.remove({ output: 'botania:fertilizer'});
    // e.remove({ id: 'minecraft:glowstone' })
})
onEvent('block.loot_tables', event => {
    event.addBlock(/minecraft:dirt/, table => {
        table.pool(pool => {
            pool.setUniformRolls(4, 8)
            pool.survivesExplosion()
            pool.addEntry({ type: 'minecraft:item', name: 'minecraft:diamond' })
        })
    })
    event.addBlock("exnihilosequentia:infested_leaves", table => {
        table.pool(pool => {
            pool.setUniformRolls(4, 4)
            // pool.survivesExplosion()
            // pool.randomChance()
            //TODO will be added later by mod
            pool.addEntry({ type: 'minecraft:item', name: 'minecraft:diamond' })
        })
    })

})

    /*
    e.shaped('atmadditions:dimensional_seed', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'compressium:stone_6',
        B: 'compressium:endstone_4',
        C: 'compressium:netherrack_4',
        D: 'compressium:clay_3',
        E: 'compressium:emerald_5',
        F: 'compressium:soulsand_4',
        G: 'compressium:redsand_4',
        H: 'compressium:snow_4',
        I: 'compressium:obsidian_3'
    })
    */
