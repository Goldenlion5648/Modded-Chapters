// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', tooltip => {
    // Add tooltip to all of these items
    // tooltip.add(['quark:backpack', 'quark:magnet', 'quark:crate'], 'Added by Quark Oddities')
    // You can also use any ingredient except #tag
    // tooltip.add(/refinedstorage:red_/, 'Can be any color')
    // Multiple lines with an array []. You can also escape ' by using other type of quotation marks
    tooltip.add('kubejs:healthometer', ["Totally not just for performance reasons!"])

    // tooltip.addAdvanced('thermal:latex_bucket', (item, advanced, text) => {
    //     text.add(0, Text.of('Hello')) // Adds text in first line, replacing title. If you want 2nd line, the index must be 1
    // })
})
onEvent('jei.hide.items', event => {
    // event.hide('#exnihilosequentia:crook')
    event.hide([Item.of('exnihilosequentia:crook_wood', { Damage: 0 }), Item.of('exnihilosequentia:crook_stone', { Damage: 0 }), Item.of('exnihilosequentia:crook_andesite', { Damage: 0 }), Item.of('exnihilosequentia:crook_granite', { Damage: 0 }), Item.of('exnihilosequentia:crook_diorite', { Damage: 0 }), Item.of('exnihilosequentia:crook_gold', { Damage: 0 })])

    event.hide(['cyclic:energy_pipe', 'cyclic:item_pipe', 'cyclic:fluid_pipe'])
    // for (let i of removeAndHide) {
    //     event.hide('example:ingredient');
    // }
})

onEvent('jei.information', event => {
    event.add('botania:elementium_nugget', ['Can be obtained from elementium ore, which can be found in alfheim'])
    event.add('botania:elementium_ingot', ['Can be obtained from elementium nuggets, which come from elementium ore, which can be found in alfheim'])
})