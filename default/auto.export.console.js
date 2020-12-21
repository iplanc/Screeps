/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-12-21 12:58:19
 * @FilePath: \Screeps\default\auto.export.console.js
 */

var oldTime = new Date().getTime();
var newTime = 0;

var consoleExport = {

	run: function(marketMode) {

		newTime = new Date().getTime();
		console.log('Game Time is: <span style="color:#FF0000;">' + Game.time + '</span> ' + '(<span style="color:#FF0000;">' + ((newTime - oldTime) / 1000) + '</span>second).');
		oldTime = newTime;

		console.log('You have <span style="color:#FF0000;">' + Game.market.credits + '</span> Credits aviliable.');

		for (var name in Game.rooms) {
			if (Game.rooms[name].controller == null) return;
			console.log('Room "<span style="color:#FF0000;">' + name + '</span>' +
						'" has <span style="color:#FF0000;">' + Game.rooms[name].energyAvailable + '</span>/<span style="color:#FF0000;">' + Game.rooms[name].energyCapacityAvailable + '</span> energy' +
						', controller level is <span style="color:#FF0000;">' + Game.rooms[name].controller.level + '</span>' +
						', progress left <span style="color:#FF0000;">' + (Game.rooms[name].controller.progressTotal - Game.rooms[name].controller.progress) + '</span>.\t');
		}

	    // console.log('Room "' + 'W34N2' + '" has <span style="color:#FF0000;">' + Game.rooms['W34N2'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</span> Energy to use, market mode is <span style="color:#FF0000;">' + marketMode + '</span>.');
		// console.log('Room "' + 'W34N3' + '" has <span style="color:#FF0000;">' + Game.rooms['W34N3'].terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</span> Energy to use, market mode is <span style="color:#FF0000;">' + marketMode + '</span>.');

		for (var name in Memory.creeps) {
			if (!Game.creeps[name]) {
				delete Memory.creeps[name];
				console.log('Clearing non-existing creep memory:<span style="color:#FF0000;">' +  name + '</span>.');
			}
		}
	}
}

module.exports = consoleExport;
