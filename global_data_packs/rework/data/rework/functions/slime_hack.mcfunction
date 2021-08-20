# tag @e[type=minecraft:slime] add modified
execute in rework:tinkerer_world run execute as @e[tag=!modified,type=minecraft:slime,distance=1..] run data merge entity @s {ForgeData: {"botania:world_spawned": 1b}}
tag @e[tag=!modified,type=minecraft:slime] add modified
# execute as @e[type=minecraft:slime] run data merge entity @s {ForgeData: {"botania:world_spawned": 1b}}