/*
 * @Author: PlanC
 * @Date: 2020-12-19 10:38:18
 * @LastEditTime: 2020-12-19 10:49:37
 * @FilePath: \Screeps\default\auto.spawn.js
 */

// lv.1 300
// lv.2 550
// lv.3 800
// lv.4 1300
// lv.5 1800
// lv.6 2300
// lv.7 5600
// lv.8 12900

var autoSpawn = {
    run: function() {
        var tou = TOUGH;
        var mov = MOVE;
        var wok = WORK;
        var cry = CARRY;
        var atk = ATTACK;
        var rag = RANGED_ATTACK;
        var hel = HEAL;
        var clm = CLAIM;

        var creepTable = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0], // lv.0
            [1, 1, 0, 0, 0, 0, 0, 0, 1], // lv.1
            [1, 1, 0, 0, 0, 0, 0, 0, 3], // lv.2
            [1, 1, 0, 0, 0, 0, 0, 0, 3], // lv.3
            [1, 1, 0, 0, 0, 0, 0, 0, 1], // lv.4
            [1, 1, 0, 0, 0, 1, 1, 0, 1], // lv.5
            [1, 1, 0, 0, 0, 1, 1, 0, 1], // lv.6
            [1, 1, 0, 0, 0, 1, 1, 0, 1], // lv.7
            [1, 1, 0, 1, 1, 1, 1, 0, 1]  // lv.8
        ];

        var builderTemple = [
            [],
            [wok, cry, mov],
            [wok, cry, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov]
        ];

        var harvesterTemple = [
            [],
            [wok, cry, mov],
            [wok, cry, mov],
            [wok, cry, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov]
        ];

        var harvesterfarTemple = [
            [],
            [wok, cry, mov],
            [wok, cry, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov],
            [wok, wok, wok, wok, wok, wok, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, cry, mov, mov]
        ];

        var minerTemple = [
            [],
            [],
            [],
            [],
            [],
            [],
            [wok, wok, wok, wok, cry, cry, cry, cry, mov, mov, mov, mov],
            [wok, wok, wok, wok, cry, cry, cry, cry, mov, mov, mov, mov],
            [wok, wok, wok, wok, cry, cry, cry, cry, mov, mov, mov, mov]
        ];

        var repairerTemple = [
            [],
            [],
            [],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov]
        ];

        var supplierTemple = [
            [],
            [],
            [],
            [cry, cry, mov],
            [cry, cry, mov],
            [cry, cry, mov],
            [cry, cry, mov],
            [cry, cry, mov],
            [cry, cry, mov]
        ];

        var transporterTemple = [
            [],
            [],
            [],
            [cry, cry, mov, mov],
            [cry, cry, mov, mov],
            [cry, cry, mov, mov],
            [cry, cry, mov, mov],
            [cry, cry, mov, mov],
            [cry, cry, mov, mov]
        ];

        var upgraderTemple = [
            [],
            [wok, cry, mov],
            [wok, cry, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov],
            [wok, wok, cry, cry, mov, mov]
        ];

        for (roomname in Game.rooms) {
            var creepExists = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            creepExists[0] = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder'        && creep.pos.roomName == roomname).length;
    		creepExists[1] = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'      && creep.pos.roomName == roomname).length;
    		creepExists[2] = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar'   && creep.pos.roomName == roomname).length;
    		creepExists[3] = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner'          && creep.pos.roomName == roomname).length;
    		creepExists[4] = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'       && creep.pos.roomName == roomname).length;
    		creepExists[5] = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier'       && creep.pos.roomName == roomname).length;
    		creepExists[6] = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter'    && creep.pos.roomName == roomname).length;
    		creepExists[7] = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporterSpc' && creep.pos.roomName == roomname).length;
    		creepExists[8] = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'       && creep.pos.roomName == roomname).length;

            var level = Game.rooms[roomname].controller.level;
            var spawn = Game.rooms[roomname].find(FIND_MY_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
            });

            if (spawn.length > 0) {
                var constructionSite = Game.rooms[roomname].find(FIND_CONSTRUCTION_SITES);
                if ((constructionSite[0] != null) && (creepExists[0] < creepTable[level][0])) {
                    console.log('Spawning new Builder for ' + roomname);
                    spawn[0].spawnCreep(builderTemple[level], 'builder_' + roomname + '_' + Game.time, {memory: {role: 'builder'}});
                }

                if (creepExists[1] < creepTable[level][1]) {
                    console.log('Spawning new Harvester for ' + roomname);
                    spawn[0].spawnCreep(harvesterTemple[level], 'harvester_' + roomname + '_' + Game.time, {memory: {role: 'harvester'}});
                }

                var twinSource = Game.rooms[roomname].find(FIND_SOURCES_ACTIVE);
                if ((twinSource.length > 2) && (creepExists[2] < creepTable[level][2])) {
                    console.log('Spawning new Harvester_Far for ' + roomname);
                    spawn[0].spawnCreep(harvesterfarTemple[level], 'harvesterFar_' + roomname + '_' + Game.time, {memory: {role: 'harvesterFar'}});
                }

                if (creepExists[3] < creepTable[level][3]) {
                    console.log('Spawning new Miner for ' + roomname);
                    spawn[0].spawnCreep(minerTemple[level], 'miner_' + roomname + '_' + Game.time, {memory: {role: 'miner'}});
                }

                if (creepExists[4] < creepTable[level][4]) {
                    console.log('Spawning new Repairer for ' + roomname);
                    spawn[0].spawnCreep(repairerTemple[level], 'repairer_' + roomname + '_' + Game.time, {memory: {role: 'repairer'}});
                }

                if (creepExists[5] < creepTable[level][5]) {
                    console.log('Spawning new Supplier for ' + roomname);
                    spawn[0].spawnCreep(supplierTemple[level], 'supplier_' + roomname + '_' + Game.time, {memory: {role: 'supplier'}});
                }

                if (creepExists[6] < creepTable[level][6]) {
                    console.log('Spawning new Transporter for ' + roomname);
                    spawn[0].spawnCreep(transporterTemple[level], 'transporter_' + roomname + '_' + Game.time, {memory: {role: 'transporter'}});
                }

                if (creepExists[8] < creepTable[level][8]) {
                    console.log('Spawning new Upgrader for ' + roomname);
                    spawn[0].spawnCreep(upgraderTemple[level], 'upgrader_' + roomname + '_' + Game.time, {memory: {role: 'upgrader'}});
                }
            }

            var spawn = Game.rooms[roomname].find(FIND_MY_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning != undefined
            });
            if (spawn.length > 0) {
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

module.exports = autoSpawn;
