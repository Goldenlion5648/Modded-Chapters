

onEvent('recipes', e => {
    e.remove({ output: "botania:mana_powder" });
    e.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "exnihilosequentia:crook_bone"
        },
        "output": {
            "item": "exnihilosequentia:crook_diamond"
        },
        "mana": 1000
    })
    e.shapeless('4x botania:fertilizer', [
        'moreflowerbushes:purple_hibiscus',
        'moreflowerbushes:mountain_laurel',
        'moreflowerbushes:blue_sage',
        'moreflowerbushes:blue_hortensia',
        'minecraft:sugar',
        "botania:mana_powder",
        'minecraft:bone_meal'
    ])
    

})