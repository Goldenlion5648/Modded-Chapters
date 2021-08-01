onEvent('block.modification', e => {
    e.modify('pickletweaks:green_cobblestone', 
    block => block.setExplosionResistance(2.0))
})