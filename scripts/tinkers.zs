// <recipetype:tconstruct:casting_basin>.addItemCastingRecipe("item_casting_basin_test", <item:minecraft:honey_bottle>, <fluid:tconstruct:blood> * 1000, <item:minecraft:diamond>, 200, false, false);
// <recipetype:tconstruct:casting_basin>.addItemCastingRecipe(name as string, cast as IIngredient, fluid as IFluidStack, result as IItemStack, coolingTime as int, consumeCast as boolean, switchSlots as boolean)

// import const;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.BracketHandlers;
import crafttweaker.api.fluid.IFluidStack;

<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("elementium_ore", <item:botania:cracked_livingrock_bricks>, <fluid:kubejs:molten_elementium> * 412, <item:kubejs:elementium_ore>, 100, true, false);


//  * 1) Adds a normal Melting Recipe that produces 1mb of Water (Fluid) when Black Dye is melted at 0°C.
// <recipetype:tconstruct:melting>.addMeltingRecipe(name as string, input as IIngredient, output as IFluidStack, temperature as int, time as int, @Optional byproduct as IFluidStack[])
// public int NUGGET_VALUE = 16;
// public int INGOT_VALUE = 144;
// public int RESOURCE_BLOCK_VALUE = 1296;
//elementium melting
// function melt_to_fluid(name as string, items as IIngredient[], output as IFluidStack){
//     for item in items {

//         <recipetype:tconstruct:melting>.addMeltingRecipe(name ~ "_ingot_to_fluid", item, <fluid:minecraft:water>, 0, 50);

// val resourceTypes = {
//     elementium:{
//         nugget : <item:botania:elementium_nugget>,
//         ingot : <item:botania:elementium_ingot>,
//         block : <item:botania:elementium_block>
//     }
//     // fluid : <fluid:kubejs:molten_elementium>
// };
//     }
// }
// <item:botania:elementium_ingot>
// <item:botania:elementium_nugget>
// <item:botania:elementium_block>
var name = "elementium" as string;
<recipetype:tconstruct:melting>.addMeltingRecipe(name + "_ingot_to_fluid", <item:botania:elementium_ingot>, <fluid:kubejs:molten_elementium> * Const.INGOT_VALUE, 1000, 50);
<recipetype:tconstruct:melting>.addMeltingRecipe(name + "_nugget_to_fluid", <item:botania:elementium_nugget>, <fluid:kubejs:molten_elementium> * Const.NUGGET_VALUE, 1000, 50);
<recipetype:tconstruct:melting>.addMeltingRecipe(name + "_block_to_fluid", <item:botania:elementium_block>, <fluid:kubejs:molten_elementium> * Const.RESOURCE_BLOCK_VALUE, 1000, 50);

// // <recipetype:tconstruct:casting_table>.addItemCastingRecipe(name as string, cast as IIngredient, fluid as IFluidStack, result as IItemStack, coolingTime as int, consumeCast as boolean, switchSlots as boolean)
public function add_casting_recipe(mod as string, name as string, fluid as IFluidStack) as void{
    var count = 0;
    for form in Const.cast_types {
        for cast_variant in Const.cast_types[form]{
            <recipetype:tconstruct:casting_table>.addItemCastingRecipe(mod + name + "_casting_table" + (count as string), cast_variant, fluid * Const.cast_amounts[form], BracketHandlers.getItem(mod + ":" + name + "_" + form), Const.cool_time[form], false, false);
            count = count + 1;
        }
    }
}

add_casting_recipe("botania", "elementium", <fluid:kubejs:molten_elementium>);