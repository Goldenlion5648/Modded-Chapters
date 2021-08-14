

onEvent('recipes', e => {
    // e.remove({ id: 'mysticalagriculture:seed/infusion/spider' });
    // removes all seed infusion recipes
    // e.remove({ id: /mysticalagriculture:seed\/infusion.*/ });
    // remove all kinds of seed recipes
    e.remove({ output: /mysticalagriculture:.*_seeds/ });
    
    e.remove({ input: /mysticalagriculture:.*_essence/ });
    e.remove({ output: "mysticalagriculture:basic_reprocessor"});

    // e.remove("mysticalagriculture:seed/infusion.*")

})