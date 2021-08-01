// priority: 1000

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
    // Register new items here
    // event.create('trade_apology').displayName('Trade Apology')
    event.create('portal_lighter').displayName('Mysterious Portal Lighter')
    event.create('instant_bubble').displayName('Instant Bubble')
    // event.create('example_item').displayName('Example Item')
    event.create('tough_root').food(food => {
        food.hunger(1).saturation(0.25).fastToEat(true).alwaysEdible().eaten(e => {
            // e.server.runCommandSilent(`give ${e.player} minecraft:bowl`)
            e.server.runCommandSilent(`effect give ${e.player} minecraft:strength 10 0 true`)
        })
    }).displayName('Tough Root')

    event.create('tough_root2').food(food => {
        food.hunger(2).saturation(0.5).fastToEat(true).alwaysEdible().eaten(e => {
            e.server.runCommandSilent(`effect give ${e.player} minecraft:strength 18 0 true`)
        })
    }).displayName('Spicy Tough Root')
    
    event.create('tough_root3').food(food => {
        food.hunger(3).saturation(0.7).fastToEat(true).alwaysEdible().eaten(e => {
            e.server.runCommandSilent(`effect give ${e.player} minecraft:strength 30 0 true`)
            // e.server.runCommandSilent(`give ${e.player} minecraft:bowl`)
        })
    }).displayName('Shiny Spicy Tough Root')
})

onEvent('block.registry', event => {
    // Register new blocks here
    event.create('seared_replaced').material('stone').hardness(1.0).displayName('Seared Replaced')
    event.create('wet_cobblestone').material('stone').hardness(1.0).displayName('Porous Cobblestone')
    event.create('seared_fluid').material('stone').hardness(1.0).displayName('Seared Fluid Replaced')
    event.create('water_crystal_trigger').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(8.0).resistance(100000).displayName('Condensed Crystal')
    event.create('water_crystal').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(1.5).displayName('Water Crystal')
    event.create('ocean_floor').material('stone').unbreakable().displayName('Ocean Floor')
    event.create('tough_green_rock').material('stone').harvestTool("pickaxe", 4).displayName('Tough Green Rock')
    event.create('green_gem').material('stone').hardness(8.0).resistance(100000).requiresTool(true).displayName('Green Gem Core')
    event.create('mysterious_block').material('stone').hardness(8.0).resistance(100000).displayName('Mysterious Block')
    // event.create('mysterious_block').material('stone').hardness(8.0).resistance(100000).displayName('Mysterious Block')
    event.create('greenland_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Greenland Portal Frame')
    event.create('alfheim_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Alfhiem Portal Frame')
    event.create('tinkers_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Tinkers Portal Frame')
    event.create('ocean_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Ocean Portal Frame')
    event.create('elementium_ore').material('stone').hardness(2.0).displayName('Elementium Ore')
})

onEvent('fluid.registry', event => {
    // Basic "thick" (looks like lava) fluid with red tint
    event.create('liquid_green').textureThick(0x1F9903).bucketColor(0x82E8A2).displayName('Liquid green')
    // Basic "thin" (looks like water) fluid with cyan tint
    // event.create('thin_fluid').textureThin(0x00FFFF).bucketColor(0x00FFFF).displayName('Thin Fluid')
    // Fluid with custom textures
    // event.create('strawberry_cream').displayName('Strawberry Cream').textureStill('kubejs:block/strawberry_still').textureFlowing('kubejs:block/strawberry_flow').bucketColor(0xFF33FF)
})