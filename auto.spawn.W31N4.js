/*
 * @Author: PlanC
 * @Date: 2020-09-15 20:35:24
 * @LastEditTime: 2020-09-16 18:11:23
 * @FilePath: \default\auto.spawn.W31N4.js
 */

var allowBuilder = 1;

var expectedHarvesters = 1;
var expectedHarvestersFar = 0;
var expectedMiner = 0;
var expectedRepairers = 1;
var expectedSuppliers = 0;
var expectedTransporters = 0;
var expectedUpgraders = 1;

var autoSpawn_W31N4 = {
    run: function() {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W31N4');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W31N4');
        var harvestersFar = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W31N4');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W31N4');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W31N4');
        var suppliers = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W31N4')
        var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W31N4');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W31N4');

        //W31N4
        var spawn = Game.rooms['W31N4'].find(FIND_MY_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
        });
        if (spawn.length > 0) {
            //1300 Energy
            if (harvesters.length < expectedHarvesters) {
                var newName = 'Harvester_W31N4_' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'harvester'}});
            }

            //800 Energy
            if (miners.length < expectedMiner && Game.getObjectById('5bbcb1c740062e4259e9331c').ticksToRegeneration == undefined) {
                var newName = 'Miner_W31N4_' + Game.time;
                console.log('Spawning new Miner: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'miner'}});
            }

            //1800 Energy
            //no construction site no builder, 1 builder only, allowed to spawn
            var constructionTarget = Game.rooms['W31N4'].find(FIND_CONSTRUCTION_SITES);
            if (constructionTarget[0] != null && builders.length == 0 && allowBuilder) {
                var newName = 'Builder_W31N4_' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder'}});
            }

            //550 Energy
            if (repairers.length < expectedRepairers) {
                var newName = 'Repairers_W31N4_' + Game.time;
                console.log('Spawning new Repairers: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'repairer'}});
            }

            //200 Energy
            if (transporters.length < expectedTransporters) {
                var newName = 'Transporter_W31N4_' + Game.time;
                console.log('Spawning new Transporter: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporter'}});
            }

            //150 Energy
            if (suppliers.length < expectedSuppliers) {
                var newName = 'Supplier_W31N4_' + Game.time;
                console.log('Spawning new Supplier: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE], newName,
                    {memory: {role: 'supplier'}});
            }

            //1150 Energy
            if (upgraders.length < expectedUpgraders) {
                var newName = 'Upgrader_W31N4_' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'upgrader'}});
            }

            if (spawn[0].Spawning) {
                var spawningCreep = Game.creeps[spawn[0].spawning.name];
                spawn[0].room.visual.text(
                    '🛠️' + spawningCreep.memory.role,
                    spawn[0].pos.x + 1,
                    spawn[0].pos.y,
                    {align: 'left', opacity: 0.8});
            }
        }
    }
}

module.exports = autoSpawn_W31N4;
