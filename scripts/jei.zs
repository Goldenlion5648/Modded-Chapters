mods.jei.JEI.hideCategory("minecraft:anvil");
mods.jei.JEI.hideCategory("mysticalagriculture:reprocessor");


mods.jei.JEI.addInfo(<item:botania:mana_powder>, ["Can be obtained by using a mana infused crook on infested leaves"]);
var toHide = [<item:quark:gunpowder_sack>,
<item:quark:bamboo_block>,
// <item:quark:sugar_cane_block>,
<item:quark:charcoal_block>,
<item:thermal:apple_block>];
for item in toHide {
    mods.jei.JEI.hideItem(item);

}
craftingTable.removeByName("quark:building/crafting/compressed/sugar_cane_block_uncompress");
craftingTable.addShapeless("sugar_cane_out4", <item:minecraft:sugar_cane> * 4, [<item:quark:sugar_cane_block>]);
craftingTable.addShaped("sugar_cane_2x2", <item:quark:sugar_cane_block>, [[<item:minecraft:sugar_cane>, <item:minecraft:sugar_cane>],[<item:minecraft:sugar_cane>, <item:minecraft:sugar_cane>]]);