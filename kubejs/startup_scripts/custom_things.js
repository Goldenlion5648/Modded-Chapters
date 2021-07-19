// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	event.create('trade_apology').displayName('Trade Apology')
	event.create('portal_lighter').displayName('Mysterious Portal Lighter')
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('seared_replaced').material('stone').hardness(1.0).displayName('Seared Replaced')
	event.create('seared_fluid').material('stone').hardness(1.0).displayName('Seared Fluid Replaced')
    event.create('water_crystal_trigger').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(8.0).resistance(100000).displayName('Condensed Crystal')
    event.create('water_crystal').material('glass').harvestTool("pickaxe", 3).requiresTool(true).hardness(1.5).displayName('Water Crystal')
    event.create('ocean_floor').material('stone').unbreakable().displayName('Ocean Floor')
	// event.create('elementium_ore').material('stone').hardness(2.0).displayName('Elementium Ore')
})