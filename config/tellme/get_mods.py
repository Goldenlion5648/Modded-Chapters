import re
with open("items_2021-05-07_21.15.53.csv") as f:
    a = f.read().split("\n")

mods = set()
for i in a:
    # cur = (re.findall(r"^[\w],", i))
    cur = i.split(",")
    if cur:
        mods.add(cur[0][1:-1])

print(sorted(mods))
# re.

['', 'Ars Nouveau', 'Blood Magic', 'Botania', 'Bountiful', 'CoFH Core', 'Create', 'Curios API', 'Cyclic', 'Ex Compressum', 'Ex Nihilo: Sequentia', 'Extended Crafting', 'FTB Quests', 'Item Filters', 'Minecraft', 'Mod name', 'Patchouli', 'Quark', 'Spice ofLife: Potato Edition', 'Thermal Series', "Tinkers' Construct", 'Tome of Blood']
