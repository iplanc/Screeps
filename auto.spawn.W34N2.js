var allowBuilder = 1;

var expectedHarvesters = 1;
var expectedHarvestersFar = 1;
var expectedMiner = 1;
var expectedRepairers = 1;
var expectedSuppliers = 1;
var expectedTransporters = 1;
var expectedTransportersSpc = 1;
var expectedUpgraders = 1;

var autoSpawn_W34N2 = {
    run: function() {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W34N2');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W34N2');
        var harvestersFar = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W34N2');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W34N2');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W34N2');
        var suppliers = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W34N2')
        var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W34N2');
        var transportersSpc = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporterSpc' && creep.pos.roomName == 'W34N2');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W34N2');
        
        //w34n2
        var spawn = Game.rooms['W34N2'].find(FIND_MY_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
        });
        if (spawn.length > 0) {
            //1300 Energy
            if (harvesters.length < expectedHarvesters) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'harvester'}});
            }
    
            //1900 Energy
            if (harvestersFar.length < expectedHarvestersFar) {
                var newName = 'HarvesterFar' + Game.time;
                console.log('Spawning new HarvesterFar: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'harvesterFar', target: '5bbcab1e9099fc012e632e1b'}});
            }
    
            //800 Energy
            if (miners.length < expectedMiner && Game.getObjectById('5bbcb1b740062e4259e93259').ticksToRegeneration == undefined) {
                var newName = 'Miner' + Game.time;
                console.log('Spawning new Miner: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
                    {memory: {role: 'miner'}});
            }
    
            //1800 Energy
            //no construction site no builder, 1 builder only, allowed to spawn
            var constructionTarget = Game.rooms['W34N2'].find(FIND_CONSTRUCTION_SITES);
            if (constructionTarget[0] != null && builders.length == 0 && allowBuilder) {
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'builder'}});
            }
    
            //550 Energy
            if (repairers.length < expectedRepairers) {
                var newName = 'Repairers' + Game.time;
                console.log('Spawning new Repairers: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
                    {memory: {role: 'repairer'}});
            }
    
            //200 Energy
            if (transporters.length < expectedTransporters) {
                var newName = 'Transporter' + Game.time;
                console.log('Spawning new Transporter: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporter'}});
            }
            
            //200 Energy
            if (transportersSpc.length < expectedTransportersSpc) {
                var newName = 'TransporterSpc' + Game.time;
                console.log('Spawning new TransporterSpc: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporterSpc'}});
            }
    
            //150 Energy
            if (suppliers.length < expectedSuppliers) {
                var newName = 'Supplier' + Game.time;
                console.log('Spawning new Supplier: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE], newName,
                    {memory: {role: 'supplier'}});
            }
    
            //1150 Energy
            if (upgraders.length < expectedUpgraders) {
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newName,
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

module.exports = autoSpawn_W34N2;