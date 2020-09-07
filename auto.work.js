var roleBuilder         = require('role.builder');
var roleExperimenter    = require('role.experimenter');
var roleHarvester       = require('role.harvester');
var roleHarvesterFar    = require('role.harvester.far');
var roleMiner           = require('role.miner');
var roleRepairer        = require('role.repairer');
var roleSupplier        = require('role.supplier');
var roleTransporter     = require('role.transporter');
var roleTransporterSpc  = require('role.transporter.spc');
var roleUpgrader        = require('role.upgrader');

var autoWork = {
    run: function() {
        // roleTransporterTest.run(Game.creeps['test']);
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            if (creep.memory.role == 'experimenter') {
                roleExperimenter.run(creep);
            }
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if (creep.memory.role == 'harvesterFar') {
                roleHarvesterFar.run(creep);
            }
            if (creep.memory.role == 'miner') {
                roleMiner.run(creep);
            }
            if (creep.memory.role == 'repairer') {
                roleRepairer.run(creep);
            }
            if (creep.memory.role == 'supplier') {
                roleSupplier.run(creep);
            }
            if (creep.memory.role == 'transporter') {
                roleTransporter.run(creep);
            }
            if (creep.memory.role == 'transporterSpc') {
                roleTransporterSpc.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if (creep.hits < creep.hitsMax) {
                creep.say('Help ME !');
            }
        }
    }
}

module.exports = autoWork;