var oldTime = new Date().getTime();
var newTime = 0;

var roomVisualize = {
    run: function() {
        for (var name in Game.rooms) {
            var i = 2;
            var creeps = Game.rooms[name].find(FIND_MY_CREEPS);
            new RoomVisual(name).text(name, 2, i++, {align: 'left', font: 1.2});
            new RoomVisual(name).line(2, i, 12, i++);
            new RoomVisual(name).text('Energy:\t' + Game.rooms[name].energyAvailable + '/' + Game.rooms[name].energyCapacityAvailable, 2, i++, {align: 'left'});
            new RoomVisual(name).text('Creeps:\t' + creeps.length, 2, i++, {align: 'left'});
            if (Game.rooms[name].storage != undefined) {
                new RoomVisual(name).text('Storage:\t' + Game.rooms[name].storage.store.getUsedCapacity(), 2, i++, {align: 'left'});
            }
            new RoomVisual(name).text('Controller:\t' + Game.rooms[name].controller.progress / Game.rooms[name].controller.progressTotal * 100 + '%', 2, i++, {align: 'left'});
            new RoomVisual(name).rect(2, i, 10, 1, {fill: 'transparent', stroke: '#ffffff'})
            new RoomVisual(name).rect(2, i++, Game.rooms[name].controller.progress / Game.rooms[name].controller.progressTotal * 10, 1, {fill: '#ffffff', opacity: 0.3});
            
            i = 9;
            
            newTime = new Date().getTime();
            new RoomVisual(name).text('Game Time is: ' + Game.time + ' ' + '(' + ((newTime - oldTime) / 1000) + 'second).', 2, (49 - i-- - 2), {align: 'left'});
            oldTime = newTime;
            
            new RoomVisual(name).text('You have ' + Game.market.credits + ' Credits aviliable.', 2, (49 - i-- - 2), {align: 'left'});
            
            for (var name1 in Game.rooms) {
                if (Game.rooms[name1].controller == null) return;
                new RoomVisual(name).text( 'Room "' + name1 + 
                                            '" ' + Game.rooms[name1].energyAvailable + ' / ' + Game.rooms[name1].energyCapacityAvailable +
                                            ',\t CL ' + Game.rooms[name1].controller.level + '' +
                                            ',\t progress left ' + (Game.rooms[name1].controller.progressTotal - Game.rooms[name1].controller.progress), 
                                            2, (49 - i-- - 2), {align: 'left'});
            }
        }
    }
}

module.exports = roomVisualize;