import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;


SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:bone>)
        .setReagents([<item:minecraft:leather>*2,<item:minecraft:beef>])
        .addMob(MobInfo.create()
            .setMob(<entitytype:minecraft:illusioner>)
            .setOffset(1,2,1)
            .setSpread(1,1,1)
        )
);
            // .setData({
            //     "Health":200,
            //     // "Attributes":[
            //     //     {"Name":"generic.max_health", "Base":200},
            //     //     {"Name":"generic.movement_speed", "Base":0.3},
            //     //     {"Name":"generic.attack_damage", "Base":6}
            //     // ],
            //     "CustomName":"A Lost Soul",
            //     "PersistenceRequired":1,
            //     "CustomNameVisible":1
            // })

// SummoningDirector.addSummonInfo(SummoningInfo.create()
//          .setCatalyst(<item:minecraft:stick>)
//          .setConsumeCatalyst(false)
//          .setReagents([<item:minecraft:stone>, <item:minecraft:egg>*12])
//          .addMob(MobInfo.create().setMob("minecraft:zombie")));

// SummoningDirector.addSummonInfo(
//     SummoningInfo.create()
//         .setCatalyst(<item:minecraft:bone>)
//         .setReagents([<item:minecraft:leather>*2,<item:minecraft:beef>])
//         .addMob(MobInfo.create()
//             .setMob("minecraft:zombie")
//             .setOffset(1,2,1)
//             .setSpread(1,1,1)
//             .setData({
//                 "Health":200,
//                 "Attributes":[
//                     {"Name":"generic.max_health", "Base":200},
//                     {"Name":"generic.movement_speed", "Base":0.3},
//                     {"Name":"generic.attack_damage", "Base":6}
//                 ],
//                 "CustomName":"A Lost Soul",
//                 "PersistenceRequired":1,
//                 "CustomNameVisible":1
//             })
//         )
// );

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:dirt>)
        .setReagents([<item:minecraft:gold_ingot>,<item:minecraft:beef>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:illusioner>)
            .setOffset(1,2,1)
            .setSpread(1,1,1)
            .setData({
                "Health":100,
                "ForgeData":{"excompressum": {"Compressed": 1}},
                "Attributes":[
                    {"Name":"generic.max_health", "Base":100}
                ],
                "Tags":["og"],
                "CustomName":'{"text":"Magician"}',
                "PersistenceRequired":1,
                "CustomNameVisible":1
            })
        )
);

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:bone>)
        .setReagents([<item:minecraft:leather>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:zombie_villager>)
            .setOffset(1,2,1)
            .setSpread(1,1,1)
            .setData({
                "Health":200,
                "Attributes":[
                    {"Name":"generic.max_health", "Base":200},
                    {"Name":"generic.movement_speed", "Base":0.3},
                    {"Name":"generic.attack_damage", "Base":6}
                ],
                "CustomName":"A Lost Soul",
                "PersistenceRequired":1,
                "CustomNameVisible":1
            })
        )
);