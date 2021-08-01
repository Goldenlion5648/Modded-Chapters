import os
from pathlib import Path
import json
from posixpath import join
import pandas as pd

# pack_path = ('C:\Users\cobou\Documents\Curse\Minecraft\Instances\Expert2021\global_resource_packs\rework_resources\assets\rework\models\tool_materials')

DUMMY_FILE = "bone"


def add_material(new_material, top_level="rework", datapack_name="rework"):
    pack_path = os.path.dirname(os.path.realpath(__file__))
    main_datapack_folder = os.path.join(pack_path, "global_data_packs",
                                        top_level,
                             "data",
                             datapack_name, 
                              )
    print(main_datapack_folder)
    temp = main_datapack_folder
    main_datapack_folder = os.path.join(main_datapack_folder, "materials")
    with open(os.path.join(main_datapack_folder,
                        "definition",
                        new_material + ".json"), 'w') as f:
        print(
        '''{
        "craftable": true,
        "tier": 1,
        "sortOrder": 2,
        "textColor": "#25A883",
        "hidden": false
        }''', file=f)
    with open(os.path.join(main_datapack_folder,
                           "stats",
                           new_material + ".json"), 'w') as f:
        print(
            '''{
        "craftable": true,
        "tier": 1,
        "sortOrder": 2,
        "textColor": "#25A883",
        "hidden": false
        }''', file=f)

import re
def get_data(filename=DUMMY_FILE):
    joined = None
    for folder in ["definition", "stats", "traits"]:
        overall = pd.DataFrame()
        for i, path in enumerate(
                Path('global_data_packs')
                .rglob(f'**/tconstruct/materials/{folder}/*.json')):
            df = pd.DataFrame(
                {"name": [re.sub(r"\.\w+", "", os.path.basename(path))]})
            print(path)
            with open(path) as f:
                info = json.loads(f.read())
                print(info)
            df2 = pd.json_normalize(info)
            # print("columns", df2.columns)
            conversions = {j: j.replace("stats.tconstruct:", "") for j in df2.columns}
            # print(conversions)
            # print("before", df2)
            df2 = df2.rename(columns=conversions)
            # df2.to_csv(f'output{i}.csv', index=False, encoding='utf-8')
            # print("after", df2)
            # if i == 2:
            #     df = pd.concat([df, df2], axis=1)
            # else:
            df = pd.concat([df, df2], axis=1)
            overall = pd.concat([overall, df])
        # print(overall)
        overall.to_csv(f'output_pooled_{folder}.csv',
                       index=False, encoding='utf-8')
        # print(len(joined))
        # joined = overall if joined is None else pd.merge(joined, overall, on="name")
        joined = overall if joined is None else pd.concat([joined, overall], axis=1)
            # try:
            #     joined = joined.merge(overall, how="left", on="name")
            # except:
            #     joined = overall
    # print(df)


    # df.to_csv(f'output_pooled.csv', index=False, encoding='utf-8')
    joined.to_csv(f'output_joined.csv', index=False, encoding='utf-8')
    print(overall)

# get_data("tconstruct/materials/*")


def read_joined(file='output_joined.csv'):
    df = pd.read_csv(file)
    revised = df.drop(columns=["name.1", "name.2"])
    # for index, row in df.iterrows():


    # for i in table:
        # print(i)
    print((revised))

read_joined()
        # df = pd.read_json(info)
        # print(df)
    # df.to_csv(f"")
        # print(json.dumps(info))
        # print(type(info))
        # for k, v in info.items():
        #     print(k)
# print(pack_path)
# exit()
# add_material()
# print("test", file="dummy.txt")



# with open("", 'w') as f:
#     f.write('''{
#   "fallbacks": ["rock"],
#   "color": "09AD24"
# }''')
