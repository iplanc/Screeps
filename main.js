/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:11:19
 * @FilePath: \Screeps\main.js
 */

 var autoattack      = require('auto.attack');
var autodefence     = require('auto.defence');
var autoexpand      = require('auto.expand');
var exportConsole   = require('auto.export.console');
var exportGrafana   = require('auto.export.grafana');
var exportRoom      = require('auto.export.roomVisual');
var autoFactory     = require('auto.factory');
var autoLabtory     = require('auto.labtory');
var autoLink        = require('auto.link');
var autoMarket      = require('auto.market');
var autoSpawn       = require('auto.spawn');
var autoTower       = require('auto.tower');
var autoWork        = require('auto.work');
var stuffPower      = require('stuff.power');

var marketMode = 1;

module.exports.loop = function() {

	console.log();
	console.log();

	// if (Game.creeps['claim'].claimController(Game.creeps['claim'].room.controller) == ERR_NOT_IN_RANGE) {
	//     Game.creeps['claim'].moveTo(Game.creeps['claim'].room.controller, {stroke: '#ffffff'});
	// }

	// for (var name in Game.creeps) {
	//     var creep = Game.creeps[name];
	//     creep.suicide();
	// }

	if (Game.cpu.bucket == 10000) {
		Game.cpu.generatePixel()
		console.log("Use 5000 CPU generated 1 Pixel")
	}

	autoattack.run();
	autodefence.run();
	autoexpand.run();
	exportConsole.run(marketMode);
	exportGrafana.run();
	exportRoom.run();
	autoFactory.run();
	autoLabtory.run("W34N2");
	autoLink.run();
	autoMarket.run(marketMode);
	autoSpawn.run();
	autoTower.run();
	autoWork.run();
	stuffPower.run();
}
