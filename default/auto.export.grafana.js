/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:09:13
 * @FilePath: \Screeps\auto.export.grafana.js
 */

var oldTime = new Date().getTime();
var newTime = 0;

var grafanaExport = {

	run: function() {
		if (!Memory.stats) Memory.stats = {};
		Memory.stats.gcl = (Game.gcl.progress / Game.gcl.progressTotal) * 100;
		Memory.stats.gclLevel = Game.gcl.level;
		Memory.stats.gpl = (Game.gpl.progress / Game.gpl.progressTotal) * 100;
		Memory.stats.gplLevel = Game.gpl.level;
		Memory.stats.cpu = Game.cpu.getUsed() * 100;
		Memory.stats.bucket = Game.cpu.bucket;
		Memory.stats.gameTime = Game.time;
		Memory.stats.credits = Game.market.credits;
		Memory.stats.pixel = Game.resources.pixel;
		Memory.stats.storageW21S33 = Game.rooms['W21S33'].storage != undefined ? Game.rooms['W21S33'].storage.store.getUsedCapacity() : 0;
		Memory.stats.terminalW21S33 = Game.rooms['W21S33'].terminal != undefined ? Game.rooms['W21S33'].terminal.store.getUsedCapacity() : 0;

		newTime = new Date().getTime();
		Memory.stats.tickDuration = (newTime - oldTime) / 1000;
		oldTime = newTime;
	}
}

module.exports = grafanaExport;
