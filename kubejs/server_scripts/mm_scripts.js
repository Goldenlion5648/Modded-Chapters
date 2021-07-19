
onEvent('recipes', event => {
    //StructureNameHere
    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "basic",
        "id": "example_structure",
        "name": "Master Machine",
        "layout": [
            [
                "AAA",
                "IAO",
                "ACA"
            ]
        ],
        "legend": {
            "A": {
                "block": "minecraft:cobblestone"
            },
            "I": {
                "block": "masterfulmachinery:basic_basic_port_items_input"
            },
            "O": {
                "block": "masterfulmachinery:basic_basic_port_items_output"
            }
        }
    }
)

    //RecipeNameHere
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "example_structure",
        "controllerId": "basic",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "tag": "minecraft:wool",
                    "count": 2
                }
            }
        ],
        "outputs": [
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": "minecraft:string",
                    "count": 4
                }
            }
        ]
    })

})