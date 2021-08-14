import crafttweaker.api.item.IItemStack;

public class Const {
    public static var test as string = "Hello World";
    public static var NUGGET_VALUE as int = 16;
    public static var INGOT_VALUE as int = 144;
    public static var RESOURCE_BLOCK_VALUE as int = 1296;
    public static var cast_types =
    {
        nugget : [
            <item:tconstruct:nugget_sand_cast>,
            <item:tconstruct:nugget_cast>,
            <item:tconstruct:nugget_red_sand_cast>
        ],
        ingot :[
            <item:tconstruct:ingot_sand_cast>,
            <item:tconstruct:ingot_cast>,
            <item:tconstruct:ingot_red_sand_cast>
        ],
    };
    
    public static val cast_amounts= 
    {
        nugget : NUGGET_VALUE,
        ingot : INGOT_VALUE,
        block : RESOURCE_BLOCK_VALUE
    };

    public static val cool_time = 
    {
        nugget : 0,
        ingot : 60,
        block : 180
    };
    

    // public static val resource_types = {
    //     "elementium":{
    //         nugget : <item:botania:elementium_nugget>,
    //         ingot : <item:botania:elementium_ingot>,
    //         block : <item:botania:elementium_block>
    //     }
    // };
}