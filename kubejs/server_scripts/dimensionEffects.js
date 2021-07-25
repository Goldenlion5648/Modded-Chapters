//priority 0
const effects = [
    { heightCondition: (a, b) => a <= b,
         dimensionCondition: (cur, shouldBe) => cur == shouldBe, 
         verticalLimit: 130, tag: 'flightLimit', cancelsTag: ['toxicLimit'], potionEffect: 'fltpot:flight_effect', duration: 4, amplification: 0, showParticles: false, transparentParticles: false }
]

//heightCondition: How you want to evaluate the user's height, only options are really >, >=, <, <=, ==, !=
//verticalLimit: Block Y to trigger with the aforementioned heightCondition
//tag: Tag to apply to the player, should be unique per effect
//cancelsTag: Tag to remove, * for all
//potionEffect: Potion effect to apply, '' will not apply an effect
//duration: Duration in seconds, 2 is the minimum time in order to tick damage
//amplification: 0-255, Level of potion effect
//showParticles: Whether to show the particles of having the effect
//transparentParticles: Only used when showParticles = true, makes the particles more see-through

const alfWorld = "rework:alfheim"

//On player tick, evaluate the effects that can be applied, add/remove tags when appropriate
onEvent('player.tick', event => {
    if (event.player.isCreativeMode())
    {
        // console.log("was creative")
        return
    }
    effects.forEach(effect => {
        if (effect.heightCondition(event.player.y, effect.verticalLimit) && effect.dimensionCondition(event.player.getWorld().dimension, alfWorld)) {
            // if (effect.cancelsTag.length > 0) {
            //     effect.cancelsTag.forEach(tag => {
            //         if (tag == '*') {
            //             event.player.tags.clear()
            //         } else {
            //             event.player.tags.remove(tag)
            //         }
            //     })
            // }
            // if (!event.player.tags.contains(effect.tag)) {
            event.player.tags.remove(effect.tag)
            event.player.tags.add(effect.tag)
            // }
        }
        else {
            if (event.player.tags.contains(effect.tag)) {
                event.player.tags.remove(effect.tag)

                // Remove the notified tag
                event.player.tags.remove(`${effect.tag}_notified`)
            }
        }
    })
})

//On server tick, evaluate the tags on players and determine which effects to apply
onEvent('server.tick', event => {
    event.server.getPlayers().forEach(player => {
        // inspect(player.getWorld())
        if (player.isCreativeMode())
            return
        effects.forEach(effect => {
            if (player.getTags().contains(effect.tag) && player.getWorld().dimension == alfWorld) {
                if (effect.potionEffect) {
                    // if (!player.potionEffects.isActive(effect.potionEffect)) {
                    player.potionEffects.add(effect.potionEffect, 20 * effect.duration, effect.amplification, effect.transparentParticles, effect.showParticles)
                    // }
                }
                // Notify User 
                if (effect.notify) {
                    // If the player has not been notified
                    if (!player.getTags().contains(`${effect.tag}_notified`)) {
                        // Notify
                        player.tell(effect.notification)
                        // If the effect only notifies the user once
                        if (effect.repeatNotify == false) {
                            // Adds the notified tag, This ensures that the users chat does not get spammed
                            player.getTags().add(`${effect.tag}_notified`)
                        }
                    }
                }
            }
        })
    })
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