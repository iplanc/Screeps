var oldTime = new Date().getTime();
var newTime = 0;

var consoleExport = {

    run: function(marketMode) {

        newTime = new Date().getTime();
        console.log('Game Time is: <font color="cyan">' + Game.time + '</font> ' + '(<font color="cyan">' + ((newTime - oldTime) / 1000) + '</font>second).');
        oldTime = newTime;

        console.log('You have <font color="cyan">' + Game.market.credits + '</font> Credits aviliable.');

        for (var name in Game.rooms) {
            if (Game.rooms[name].controller == null) return;
            console.log('Room "<font color="cyan">' + name + '</font>' +
                        '" has <font color="cyan">' + Game.rooms[name].energyAvailable + '</font>/<font color="cyan">' + Game.rooms[name].energyCapacityAvailable + '</font> energy' +
                        ', controller level is <font color="cyan">' + Game.rooms[name].controller.level + '</font>' +
                        ', progress left <font color="cyan">' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '</font>.\t');
        }

        console.log('Room "' + 'W34N2' + '" has <font color="cyan">' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</font> Energy to use, market mode is <font color="cyan">' + marketMode + '</font>.');
        console.log('Room "' + 'W34N3' + '" has <font color="cyan">' + Game.rooms['W34N3'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</font> Energy to use, market mode is <font color="cyan">' + marketMode + '</font>.');

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:<font color="cyan">' +  name + '</font>.');
            }
        }
    }
}

module.exports = consoleExport;
