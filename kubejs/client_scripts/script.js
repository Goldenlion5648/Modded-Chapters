// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
    // event.hide('#exnihilosequentia:crook')
    event.hide([Item.of('exnihilosequentia:crook_wood', { Damage: 0 }), Item.of('exnihilosequentia:crook_stone', { Damage: 0 }), Item.of('exnihilosequentia:crook_andesite', { Damage: 0 }), Item.of('exnihilosequentia:crook_granite', { Damage: 0 }), Item.of('exnihilosequentia:crook_diorite', { Damage: 0 }), Item.of('exnihilosequentia:crook_gold', { Damage: 0 })])
    // for (let i of removeAndHide) {
    //     event.hide('example:ingredient');
    // }
})

onEvent('jei.information', event => {
    event.add('botania:elementium_nugget', ['Can be obtained from elementium ore, which can be found in alfheim'])
    event.add('botania:elementium_ingot', ['Can be obtained from elementium nuggets, which come from elementium ore, which can be found in alfheim'])
})