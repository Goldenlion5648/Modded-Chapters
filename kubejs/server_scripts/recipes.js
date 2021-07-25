// priority: 0

// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true
// settings.logSkippedRecipes = false
// settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)----------------------------')



// var removeAndHide = [Item.of('exnihilosequentia:crook_wood', { Damage: 0 }), Item.of('exnihilosequentia:crook_stone', { Damage: 0 }), Item.of('exnihilosequentia:crook_andesite', { Damage: 0 }), Item.of('exnihilosequentia:crook_granite', { Damage: 0 }), Item.of('exnihilosequentia:crook_diorite', { Damage: 0 }), Item.of('exnihilosequentia:crook_gold', { Damage: 0 })]
var toRemove = [
    "mining_dimension:teleporter"
    // "mining_dimension:teleporter",

]

//QoL
onEvent('recipes', e => {
    e.remove({ output: 'minecraft:emerald_block' })
    e.remove({ id: 'minecraft:emerald' });
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
    e.shapeless('4x minecraft:emerald', [
        'minecraft:emerald_block'])
    e.shaped('minecraft:emerald_block', [
        'SS',
        'SS'
    ], {
        S: 'minecraft:emerald'
    })
    e.shapeless('8x kubejs:tough_root', [
        'tconstruct:greenheart_wood',
        'tconstruct:greenheart_wood'
    ])


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