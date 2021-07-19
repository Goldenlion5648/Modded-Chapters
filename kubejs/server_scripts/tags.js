onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('exnihilosequentia:crook', "excompressum:compressed_crook")

    // // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

    // // Get #forge:ingots/copper tag and remove all entries from it
    // event.removeAll('forge:ingots/copper')
})