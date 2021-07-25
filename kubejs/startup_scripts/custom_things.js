// priority: 100

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
    // Register new items here
    // event.create('trade_apology').displayName('Trade Apology')
    event.create('portal_lighter').displayName('Mysterious Portal Lighter')
    event.create('instant_bubble').displayName('Instant Bubble')
    // event.create('example_item').displayName('Example Item')
    event.create('tough_root').food(food => {
        food.hunger(1).saturation(0.1).fastToEat(true).alwaysEdible().effect('minecraft:strength', 200, 0, 1.0).eaten(e => {
            console.log(e.player + " ate " + e.item);
            // e.server.runCommandSilent(`give ${e.player} minecraft:bowl`)
        })
    }).displayName('Tough Root')
})

onEvent('block.registry', event => {
    // Register new blocks here
    event.create('seared_replaced').material('stone').hardness(1.0).displayName('Seared Replaced')
    event.create('green_cobblestone').material('stone').hardness(1.0).displayName('Green Cobblestone')
    event.create('seared_fluid').material('stone').hardness(1.0).displayName('Seared Fluid Replaced')
    event.create('water_crystal_trigger').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(8.0).resistance(100000).displayName('Condensed Crystal')
    event.create('water_crystal').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(1.5).displayName('Water Crystal')
    event.create('ocean_floor').material('stone').unbreakable().displayName('Ocean Floor')
    event.create('green_gem').material('stone').hardness(8.0).resistance(100000).displayName('Green Gem')
    event.create('mysterious_block').material('stone').hardness(8.0).resistance(100000).displayName('Mysterious Block')
    // event.create('mysterious_block').material('stone').hardness(8.0).resistance(100000).displayName('Mysterious Block')
    event.create('greenland_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Greenland Portal Frame')
    event.create('alfheim_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Alfhiem Portal Frame')
    event.create('tinkers_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Tinkers Portal Frame')
    event.create('ocean_portal_frame').material('stone').hardness(2.0).resistance(100000).displayName('Ocean Portal Frame')
    // event.create('elementium_ore').material('stone').hardness(2.0).displayName('Elementium Ore')
})

onEvent('fluid.registry', event => {
    // Basic "thick" (looks like lava) fluid with red tint
    event.create('liquigreen').textureThick(0x1F9903).bucketColor(0x82E8A2).displayName('Liquigreen')
    // Basic "thin" (looks like water) fluid with cyan tint
    // event.create('thin_fluid').textureThin(0x00FFFF).bucketColor(0x00FFFF).displayName('Thin Fluid')
    // Fluid with custom textures
    // event.create('strawberry_cream').displayName('Strawberry Cream').textureStill('kubejs:block/strawberry_still').textureFlowing('kubejs:block/strawberry_flow').bucketColor(0xFF33FF)
})