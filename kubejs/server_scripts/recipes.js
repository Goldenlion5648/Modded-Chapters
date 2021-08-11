// priority: 10

settings.logAddedRecipes = false
// settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = false

console.info('Hello, World! (You will see this line every time server resources reload)----------------------------')



// var removeAndHide = [Item.of('exnihilosequentia:crook_wood', { Damage: 0 }), Item.of('exnihilosequentia:crook_stone', { Damage: 0 }), Item.of('exnihilosequentia:crook_andesite', { Damage: 0 }), Item.of('exnihilosequentia:crook_granite', { Damage: 0 }), Item.of('exnihilosequentia:crook_diorite', { Damage: 0 }), Item.of('exnihilosequentia:crook_gold', { Damage: 0 })]
var toRemove = [
    "mining_dimension:teleporter"
    // "mining_dimension:teleporter",

]

//QoL
onEvent('recipes', e => {
    // e.remove({ output: 'minecraft:emerald_block' })
    // e.remove({ id: 'minecraft:emerald' });
    // e.shapeless('16x minecraft:stick',
    //     [['#minecraft:logs', 'minecraft:air', 'minecraft:air','#minecraft:logs']
    // ])
    e.shaped('16x minecraft:stick', [
        'S',
        'S'
    ], {
        S: '#minecraft:logs'
    })
    e.shaped('minecraft:emerald_block', [
        'SS',
        'SS'
    ], {
        S: 'minecraft:emerald'
    })

})


onEvent('recipes', e => {
    e.remove({ output: 'minecraft:emerald_block' })
    e.remove({ id: 'minecraft:emerald' });
    // e.remove({ id: /.*spawn_egg.*/ });
    // var emeraldTools = [
    //     Item.of('cyclic:emerald_sword'),
    //     Item.of('cyclic:emerald_pickaxe'),
    //     Item.of('cyclic:emerald_shovel'),
    //     Item.of('cyclic:emerald_hoe'),
    //     Item.of('cyclic:emerald_axe')
    // ].forEach(t => {
    //     e.remove({ output: `${t}` })
    // })
    e.remove({
        output: [
            Item.of('cyclic:emerald_sword'),
            Item.of('cyclic:emerald_pickaxe'),
            Item.of('cyclic:emerald_shovel'),
            Item.of('cyclic:emerald_hoe'),
            Item.of('cyclic:emerald_axe')
        ]
    })
    e.remove({
        output: ['cyclic:magic_net', 
        Item.of('cyclic:charm_longfall'),
        "pickletweaks:flint_shears",
         Item.of('cyclic:shears_flint')]
    })
    e.remove({
        output: [
            Item.of('tconstruct:grout')

        ]
    })
    e.remove({
        output: ['cyclic:energy_pipe', 'cyclic:item_pipe', 'cyclic:fluid_pipe']
    })

    e.shapeless('4x minecraft:emerald', [
        'minecraft:emerald_block'])
    e.shaped('minecraft:emerald_block', [
        'SS',
        'SS'
    ], {
        S: 'minecraft:emerald'
    })

    e.shaped('minecraft:furnace', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'pickletweaks:green_cobblestone'
    })

    e.shaped('3x minecraft:ladder', [
        'S S',
        'SSS',
        'S S'
    ], {
        S: 'minecraft:stick'
    })

    e.shaped('tconstruct:seared_drain', [
        'S S',
        'SES',
        'S S'
    ], {
        S: 'tconstruct:seared_brick',
        E: 'kubejs:green_gem'
    })
    e.shaped('masterfulmachinery:basic_controller', [
        'SMS',
        'MEM',
        'SMS'
    ], {
        S: 'botania:green_pavement',
        M: 'minecraft:emerald',
        E: 'kubejs:green_gem'
    })

    e.shapeless('4x kubejs:tough_root2', [
        'kubejs:tough_root',
        'kubejs:tough_root',
        'kubejs:tough_root',
        'minecraft:gunpowder'
    ])
    e.shapeless('4x botania:fertilizer', [
        'moreflowerbushes:purple_hibiscus',
        'moreflowerbushes:mountain_laurel',
        'moreflowerbushes:blue_sage',
        'moreflowerbushes:blue_hortensia',
        'minecraft:sugar',
        'minecraft:bone_meal'
    ])

    e.shapeless('4x kubejs:tough_root3', [
        'kubejs:tough_root2',
        'kubejs:tough_root2',
        'kubejs:tough_root2',
        'minecraft:emerald'
    ])

    e.shapeless('6x kubejs:tough_root3', [
        'kubejs:tough_root',
        'kubejs:tough_root',
        'kubejs:tough_root',
        'minecraft:gunpowder',
        'minecraft:emerald'
    ])
    // e.shaped('12x kubejs:tough_root', [
    //     'SS',
    //     'SS'
    // ], {
    //     S: 'kubejs:tough_root',
    //     S: 'kubejs:tough_root'
    // })
    e.shapeless('12x kubejs:tough_root', [
        'tconstruct:greenheart_wood',
        'tconstruct:greenheart_wood'
    ])

    // e.shaped("tconstruct:smeltery_controller", [
    //     'SSS',
    //     'SGS',
    //     'SSS'
    // ], {
    //     S: 'minecraft:emerald',
    //     G: 'kubejs:green_gem'
    // })

    e.shaped("tconstruct:smeltery_controller", [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S: 'tconstruct:seared_bricks',
        G: 'kubejs:green_gem'
    })
    e.shaped("zensummoning:altar", [
        'WGW',
        'R R',
        'WGW'
    ], {
        R: 'minecraft:redstone_block',
        W: 'minecraft:wither_rose',
        G: 'kubejs:graveyard_soil'
    })


})


onEvent('recipes', e => {

    e.forEachRecipe({ id: /botania:runic.+/ }, recipe => {
        // console.log(inspect(recipe))
        var temp = String(recipe.json)
        // console.log(temp)
        jsoned = JSON.parse(temp)
        // console.log("input:")
        // console.log(jsoned.ingredients)
        // console.log("output:")
        // console.log(jsoned.output)
    })
    // Change recipes here
    e.remove({ output: 'botania:pure_daisy' })

    e.remove({ id: 'botania:fertilizer_dye' });
    e.remove({ id: 'botania:petal_apothecary/pure_daisy' });
    e.replaceInput({ type: 'botania:runic_altar' }, 'botania:mana_diamond', 'minecraft:gold_nugget')
    // console.log("*".repeat(50))
    // inspect(e)

    e.shaped('botania:livingwood', [
        'S',
        'S'
    ], {
        S: 'botania:livingwood_twig'
    })



    e.remove({ output: '#exnihilosequentia:crook' });
    e.remove({ output: /minecraft:wooden_*/ });
    var stoneTools = ['minecraft:stone_sword',
        'minecraft:stone_pickaxe',
        'minecraft:stone_shovel',
        'minecraft:stone_axe',
        'minecraft:stone_hoe']


    stoneTools.forEach(tool => e.remove({ output: tool }))
    toRemove.forEach(item => e.remove({ output: item }))
    // e.remove({ output: 'minecraft:wooden_*'});
    // e.remove({ id: 'minecraft:glowstone' })
    // e.shapeless('kubejs:trade_apology', ['minecraft:paper', '#forge:dyes'])
})

function stripNamespace(input) {
    var lastDot = input.lastIndexOf('.')
    if (lastDot < 0) {
        return input
    }
    return input.substring(lastDot + 1)
}

/* function inspect(obj) {
    if (typeof obj !== 'undefined') {
        var resultArray = []
        resultArray.push('Inspecting: ' + obj)

        var propertiesArray = []
        var functionsArray = []
        Object.keys(obj).forEach(key => {
            var keyType = typeof obj[key]
            if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
                propertiesArray.push('  ' + key + ': ' + obj[key])
            } else if (keyType === 'function' && !key.startsWith('func_')) {
                var rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
                var returnType = stripNamespace(rawString[1])
                var rawParameters = []
                if (rawString[2] !== 'undefined') {
                    rawParameters = rawString[2].split(',')
                }
                var parameterTypes = []
                var i
                for (i = 0; i < rawParameters.length; i++) {
                    parameterTypes.push(stripNamespace(rawParameters[i]))
                }

                functionsArray.push('  ' + key + '(' + parameterTypes.join(', ') + ') : ' + returnType)
            } else if (keyType === 'undefined') {
                propertiesArray.push('  ' + key + ': undefined')
            }
        })

        propertiesArray.sort();
        propertiesArray.unshift('=== Properties ===')
        functionsArray.sort()
        functionsArray.unshift('=== functions ===')

        resultArray.push(propertiesArray.join('\n'))
        resultArray.push(functionsArray.join('\n'))
        console.info(resultArray.join('\n'))
    } else {
        console.info('inspected object is undefined')
    }
} */

/*
e.shaped('atmadditions:dimensional_seed', [
    'ABC',
    'DEF',
    'GHI'
], {
    A: 'compressium:stone_6',
    B: 'compressium:endstone_4',
    C: 'compressium:netherrack_4',
    D: 'compressium:clay_3',
    E: 'compressium:emerald_5',
    F: 'compressium:soulsand_4',
    G: 'compressium:redsand_4',
    H: 'compressium:snow_4',
    I: 'compressium:obsidian_3'
})

e.shaped(item.of('minecraft:ladder', 4), [
        'S S',
        'SPS',
        'S S'
    ], {
        S: '#forge:rods',
        P: '#minecraft:planks'
    }).id(`kubejs:ladder`)
*/