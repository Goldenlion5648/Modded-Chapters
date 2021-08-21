<recipetype:thermal:lapidary_fuel>.removeFuel(<item:minecraft:emerald>);
<recipetype:thermal:lapidary_fuel>.addFuel("emerald_redo", <item:minecraft:emerald>, 20000);

craftingTable.removeRecipe(<item:thermal:energy_cell>);

Const.replaceRecipe("energy_cell_new", <item:thermal:energy_cell>.withTag({BlockEntityTag: {EnergyMax: 1000000 as int, EnergySend: 1000 as int, Energy: 0 as int, EnergyRecv: 1000 as int}}),
 [[<item:kubejs:green_gem>, <tag:items:forge:storage_blocks/redstone>, <item:kubejs:green_gem>],
  [<tag:items:forge:ingots/iron>, <item:thermal:energy_cell_frame>, <tag:items:forge:ingots/iron>],
   [<item:kubejs:green_gem>, <item:thermal:rf_coil>, <item:kubejs:green_gem>]]);