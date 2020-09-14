var allowBuilder_W33N5 = 1;

var expectedHarvesters_W33N5 = 1;
var expectedHarvestersFar_W33N5 = 0;
var expectedMiner_W33N5 = 0;
var expectedRepairers_W33N5 = 1;
var expectedSuppliers_W33N5 = 1;
var expectedTransporters_W33N5 = 1;
var expectedUpgraders_W33N5 = 1;

var autoSpawn_W33N5 = {
    run: function() {
        var builders_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W33N5');
        var harvesters_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W33N5');
        var harvestersFar_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W33N5');
        var miners_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W33N5');
        var repairers_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W33N5');
        var suppliers_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W33N5');
        var transporters_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W33N5');
        var upgraders_W33N5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W33N5');
        
        //W33N5
        var spawn = Game.rooms['W33N5'].find(FIND_MY_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
        });
        if (spawn.length > 0) {
            if (harvesters_W33N5.length < expectedHarvesters_W33N5) {
                var newName = 'Harvester_W33N5_' + Game.time;
                console.log('Spawning new Harvester for W33N5: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'harvester'}});
            }
    
            //200 Energy
            if (miners_W33N5.length < expectedMiner_W33N5 && Game.getObjectById('5bbcb1be40062e4259e932b0').ticksToRegeneration == undefined) {
                var newName = 'Miner_W33N5_' + Game.time;
                console.log('Spawning new Miner: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'miner'}});
            }
    
            //1800 Energy
            //no construction site no builder, 1 builder only, allowed to spawn
            var constructionTarget = spawn[0].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (constructionTarget != null && builders_W33N5.length == 0 && allowBuilder_W33N5) {
                var newName = 'Builder_W33N5_' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'builder'}});
            }
    
            //200 Energy
            if (repairers_W33N5.length < expectedRepairers_W33N5) {
                var newName = 'Repairers_W33N5_' + Game.time;
                console.log('Spawning new Repairers: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'repairer'}});
            }
    
            //200 Energy
            if (transporters_W33N5.length < expectedTransporters_W33N5) {
                var newName = 'Transporter_W33N5_' + Game.time;
                console.log('Spawning new Transporter: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporter'}});
            }
    
            //150 Energy
            if (suppliers_W33N5.length < expectedSuppliers_W33N5) {
                var newName = 'Supplier_W33N5_' + Game.time;
                console.log('Spawning new Supplier: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE], newName,
                    {memory: {role: 'supplier'}});
            }
    
            //650 Energy
            if (upgraders_W33N5.length < expectedUpgraders_W33N5) {
                var newName = 'Upgrader_W33N5_' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn[0].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'upgrader'}});
            }
            
            if (spawn[0].spawning) {
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

module.exports = autoSpawn_W33N5;