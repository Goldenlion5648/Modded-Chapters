//priority: 1000
const greenBlocks = ["pickletweaks:green_cobblestone",
    "quark:green_shingles",
    "chisel:antiblock/green",
    "tconstruct:greenheart_wood",
    "minecraft:green_glazed_terracotta",
    "minecraft:green_concrete",
    "minecraft:green_terracotta",
    "botania:green_pavement"]

onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('exnihilosequentia:crook', "excompressum:compressed_crook")
    greenBlocks.forEach(b => {
        event.add("rework:green_blocks", b)
    })

    // // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

    // // Get #forge:ingots/copper tag and remove all entries from it
    // event.removeAll('forge:ingots/copper')
})