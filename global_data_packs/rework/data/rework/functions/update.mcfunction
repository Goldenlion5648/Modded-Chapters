# scoreboard players add @a test 1
# execute as @e[type=minecraft:witch,y=195,dy=20] run team

execute as @e[type=minecraft:witch,team=!friends] at @s if entity @s[y=195,dy=100] run team join friends @s
# execute as @e[type=minecraft:witch,team=friends] at @s if entity @s[y=195,dy=-200] run team leave friends @s
execute as @e[type=minecraft:witch,team=friends] at @s if entity @s[y=194,dy=-200] run team leave @s

execute as @a[nbt={Inventory:[{Slot:103b,id:"xreliquary:witch_hat"}]}] run team join friends @s
execute as @a[nbt=!{Inventory:[{Slot:103b,id:"xreliquary:witch_hat"}]}] run team leave @s
# gamerule logAdminCommands true