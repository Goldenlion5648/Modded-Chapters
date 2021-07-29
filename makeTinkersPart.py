import os

# pack_path = ('C:\Users\cobou\Documents\Curse\Minecraft\Instances\Expert2021\global_resource_packs\rework_resources\assets\rework\models\tool_materials')
pack_path = os.path.dirname(os.path.realpath(__file__))

print(pack_path)
# exit()

with open("", 'w') as f:
    f.write('''{
  "fallbacks": ["rock"],
  "color": "09AD24"
}''')