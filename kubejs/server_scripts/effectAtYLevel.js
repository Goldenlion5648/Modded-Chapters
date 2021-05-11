/*
const effects = [
    { condition: (a, b) => a <= b, verticalLimit: 39, tag: 'miningLimit', cancelsTag: ['toxicLimit'], potionEffect: 'minecraft:mining_fatigue', duration: 1, amplification: 4, showParticles: false, transparentParticles: false },
    { condition: (a, b) => a >= b, verticalLimit: 145, tag: 'toxicLimit', cancelsTag: ['miningLimit'], potionEffect: 'minecraft:poison', duration: 1, amplification: 2, showParticles: false, transparentParticles: true, notify: true, repeatNotify: false, notification: Text.green('Get Down, Toxic Air Above!') },
    { condition: (a, b) => a >= b, verticalLimit: 145, tag: 'toxicLimit', cancelsTag: ['miningLimit'], potionEffect: 'minecraft:wither', duration: 1, amplification: 2, showParticles: false, transparentParticles: true },
]
//condition: How you want to evaluate the user's height, only options are really >, >=, <, <=, ==, !=
//verticalLimit: Block Y to trigger with the aforementioned condition
//tag: Tag to apply to the player, should be unique per effect
//cancelsTag: Tag to remove, * for all
//potionEffect: Potion effect to apply, '' will not apply an effect
//duration: Duration in seconds, 2 is the minimum time in order to tick damage
//amplification: 0-255, Level of potion effect
//showParticles: Whether to show the particles of having the effect
//transparentParticles: Only used when showParticles = true, makes the particles more see-through

//On player tick, evaluate the effects that can be applied, add/remove tags when appropriate
onEvent('player.tick', event => {
    effects.forEach(effect => {
        if (effect.condition(event.player.y, effect.verticalLimit)) {
            if (effect.cancelsTag.length > 0) {
                effect.cancelsTag.forEach(tag => {
                    if (tag == '*') {
                        event.player.tags.clear()
                    } else {
                        event.player.tags.remove(tag)
                    }
                })
            }
            if (!event.player.tags.contains(effect.tag)) {
                event.player.tags.add(effect.tag)
            }
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
        effects.forEach(effect => {
            if (player.getTags().contains(effect.tag)) {
                if (effect.potionEffect) {
                    if (!player.potionEffects.isActive(effect.potionEffect)) {
                        player.potionEffects.add(effect.potionEffect, 20 * effect.duration, effect.amplification, effect.transparentParticles, effect.showParticles)
                    }
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
*/