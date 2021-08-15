onEvent('block.modification', e => {
    e.modify('pickletweaks:green_cobblestone', block => block.setExplosionResistance(2.0))
    e.modify('botania:dreamwood', block => block.setExplosionResistance(100000.0))
    ['appliedenergistics2:quartz_block', 'appliedenergistics2:charged_quartz_ore',
        'appliedenergistics2:quartz_ore'
    ].forEach(b => {
        e.modify(b, block => block.setExplosionResistance(100000.0).setLightEmission(6))

    })

})