var produseMode = 1;

var autoFactory = {
    
    run: function() {
        for (var name in Game.rooms) {
            var factory = Game.rooms[name].controller.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_FACTORY
            });
            if (produseMode) {
                if (factory.length > 0) {
                    //50 battery == 600 energy
                    factory[0].produce(RESOURCE_BATTERY);
                    //500 ultrium + 200 energy == 100 ultrium_bar
                    factory[0].produce(RESOURCE_UTRIUM_BAR);
                    //500 Keanium + 200 energy == 100 Keanium_bar
                    factory[0].produce(RESOURCE_KEANIUM_BAR);
                }
                else {
                    continue;
                }
            }
        }
    }
}

module.exports = autoFactory;