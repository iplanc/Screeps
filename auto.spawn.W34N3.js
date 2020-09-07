var allowBuilder_W34N3 = 1;

var expectedHarvesters_W34N3 = 1;
var expectedHarvestersFar_W34N3 = 0;
var expectedMiner_W34N3 = 1;
var expectedRepairers_W34N3 = 0;
var expectedSuppliers_W34N3 = 1;
var expectedTransporters_W34N3 = 1;
var expectedTransportersSpc_W34N3 = 1;
var expectedUpgraders_W34N3 = 1;

var autoSpawn_W34N3 = {
    run: function() {
        var builders_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W34N3');
        var harvesters_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W34N3');
        var harvestersFar_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W34N3');
        var miners_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W34N3');
        var repairers_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W34N3');
        var suppliers_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W34N3');
        var transporters_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W34N3');
        var transportersSpc_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporterSpc' && creep.pos.roomName == 'W34N3');
        var upgraders_W34N3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W34N3');
        
        //w34n3
        var spawn = Game.rooms['W34N3'].find(FIND_MY_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
        });
        if (spawn.length > 0) {
            //1800 Energy
            var constructionTarget_W34N3 = spawn[0].pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (constructionTarget_W34N3 != null && builders_W34N3.length == 0 && allowBuilder_W34N3) {
                var newName = 'Builder_W34N3_' + Game.time;
                console.log('Spawning new Builder for W34N3: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
                {memory: {role: 'builder'}});
            }
            
            //800 Energy
            if (miners_W34N3.length < expectedMiner_W34N3 && Game.getObjectById('5bbcb1b740062e4259e93258').ticksToRegeneration == undefined) {
                var newName = 'Miner_W34N3_' + Game.time;
                console.log('Spawning new Miner for W34N3: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
                    {memory: {role: 'miner'}});
            }
            
            //1300 Energy
            if (harvesters_W34N3.length < expectedHarvesters_W34N3) {
                var newName = 'Harvester_W34N3_' + Game.time;
                console.log('Spawning new Harvester for W34N3: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                // spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
                    {memory: {role: 'harvester'}});
            }
    
            //400 Energy
            if (repairers_W34N3.length < expectedRepairers_W34N3) {
                var newName = 'Repairer_W34N3_' + Game.time;
                console.log('Spawning new Repairer for W34N3: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'repairer'}});
            }
    
            //150 Energy
            if (transporters_W34N3.length < expectedTransporters_W34N3) {
                var newName = 'Transporter_W34N3_' + Game.time;
                console.log('Spawning new Transporter for W34N3: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporter'}});
            }
            
            //200 Energy
            if (transportersSpc_W34N3.length < expectedTransportersSpc_W34N3) {
                var newName = 'TransporterSpc_W34N3' + Game.time;
                console.log('Spawning new TransporterSpc for W34N3: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                    {memory: {role: 'transporterSpc'}});
            }
    
            //150 Energy
            if (suppliers_W34N3.length < expectedSuppliers_W34N3) {
                var newName = 'Supplier_W34N3_' + Game.time;
                console.log('Spawning new Supplier for W34N3: ' + newName);
                spawn[0].spawnCreep([CARRY,CARRY,MOVE], newName,
                    {memory: {role: 'supplier'}});
            }
    
            //650 Energy
            if (upgraders_W34N3.length < expectedUpgraders_W34N3) {
                var newName = 'Upgrader_W34N3_' + Game.time;
                console.log('Spawning new Upgrader for W34N3: ' + newName);
                spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newName,
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

module.exports = autoSpawn_W34N3;