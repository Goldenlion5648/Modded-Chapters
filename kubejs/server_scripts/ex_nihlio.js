onEvent('recipes', e => {
    // e.remove({ id: 'mysticalagriculture:seed/infusion/spider' });
    // removes all seed infusion recipes
    e.remove({ id: "exnihilosequentia:crook/ens_leaves" });
    e.shaped("exnihilosequentia:crook_bone", [
        'BB',
        ' B',
        ' B'
    ], {
        B: 'minecraft:bone'
    })
    // e.remove("mysticalagriculture:seed/infusion.*")

})