var W31N5 = require('auto.spawn.W31N5');
var W32N4 = require('auto.spawn.W32N4');
var W32N5 = require('auto.spawn.W32N5');
var W33N5 = require('auto.spawn.W33N5');
var W34N2 = require('auto.spawn.W34N2');
var W34N3 = require('auto.spawn.W34N3');

var autoSpawn = {

    run: function() {
        W31N5.run();
        W32N4.run();
        W32N5.run();
        W33N5.run();
        W34N2.run();
        W34N3.run();
        
        // var HTMLSheet = '<font color="cyan"><table border=2 align="center">' +
        //                     '<tr>' +
        //                         '<td>' + 'Room\t' + '</td>' +
        //                         '<td>' + 'Creeps\t' + '</td>' +
        //                         '<td>' + 'Builders\t' + '</td>' +
        //                         '<td>' + 'Harvesters\t' + '</td>' +
        //                         '<td>' + 'HarvestersFar\t' + '</td>' +
        //                         '<td>' + 'Miners\t' + '</td>' +
        //                         '<td>' + 'Repairers\t' + '</td>' +
        //                         '<td>' + 'Suppliers\t' + '</td>' +
        //                         '<td>' + 'Transporters\t' + '</td>' +
        //                         '<td>' + 'Upgraders\t' + '</td>' +
        //                     '</tr>' +
        //                     '<tr>' +
        //                         '<td>' + 'W34N2' + '</td>' +
        //                         '<td>' + (builders.length + harvesters.length + harvestersFar.length + miners.length + repairers.length + suppliers.length + transporters.length + upgraders.length) + '\t</td>' +
        //                         '<td>' + builders.length + '(' + allowBuilder + '/1800)\t</td>' +
        //                         '<td>' + harvesters.length + '(' + expectedHarvesters + '/1300)\t</td>' +
        //                         '<td>' + harvestersFar.length + '(' + expectedHarvestersFar + '/1900)\t</td>' +
        //                         '<td>' + miners.length + '(' + expectedMiner + '/800)\t</td>' +
        //                         '<td>' + repairers.length + '(' + expectedRepairers + '/550)\t</td>' +
        //                         '<td>' + suppliers.length + '(' + expectedSuppliers + '/150)\t</td>' +
        //                         '<td>' + transporters.length+ '(' + expectedTransporters + '/200)\t</td>' +
        //                         '<td>' + upgraders.length + '(' + expectedUpgraders_W33N5 + '/1150)\t</td>' +
        //                     '</tr>' +
        //                     '<tr>' +
        //                         '<td>' + 'W34N3' + '</td>' +
        //                         '<td>' + (builders_W34N3.length + harvesters_W34N3.length + harvestersFar_W34N3.length + miners_W34N3.length + repairers_W34N3.length + suppliers_W34N3.length + transporters_W34N3.length + upgraders_W34N3.length) + '\t</td>' +
        //                         '<td>' + builders_W34N3.length + '(' + allowBuilder_W34N3 + '/1800)\t</td>' +
        //                         '<td>' + harvesters_W34N3.length + '(' + expectedHarvesters_W34N3 + '/1300)\t</td>' +
        //                         '<td>' + harvestersFar_W34N3.length + '(' + expectedHarvestersFar_W34N3 + '/1300)\t</td>' +
        //                         '<td>' + miners_W34N3.length + '(' + expectedMiner_W34N3 + '/800)\t</td>' +
        //                         '<td>' + repairers_W34N3.length + '(' + expectedRepairers_W34N3 + '/550)\t</td>' +
        //                         '<td>' + suppliers_W34N3.length + '(' + expectedSuppliers_W34N3 + '/150)\t</td>' +
        //                         '<td>' + transporters_W34N3.length + '(' + expectedTransporters_W34N3 + '/200)\t</td>' +
        //                         '<td>' + upgraders_W34N3.length + '(' + expectedUpgraders_W34N3 + '/650)\t</td>' +
        //                     '</tr>' +
        //                     '<tr>' +
        //                         '<td>' + 'W33N5' + '</td>' +
        //                         '<td>' + (builders_W33N5.length + harvesters_W33N5.length + harvestersFar_W33N5.length + miners_W33N5.length + repairers_W33N5.length + suppliers_W33N5.length + transporters_W33N5.length + upgraders_W33N5.length) + '\t</td>' +
        //                         '<td>' + builders_W33N5.length + '(' + allowBuilder_W33N5 + '/1800)\t</td>' +
        //                         '<td>' + harvesters_W33N5.length + '(' + expectedHarvesters_W33N5 + '/1300)\t</td>' +
        //                         '<td>' + harvestersFar_W33N5.length + '(' + expectedHarvestersFar_W33N5 + '/400)\t</td>' +
        //                         '<td>' + miners_W33N5.length + '(' + expectedMiner_W33N5 + '/800)\t</td>' +
        //                         '<td>' + repairers_W33N5.length + '(' + expectedRepairers_W33N5 + '/550)\t</td>' +
        //                         '<td>' + suppliers_W33N5.length + '(' + expectedSuppliers_W33N5 + '/150)\t</td>' +
        //                         '<td>' + transporters_W33N5.length+ '(' + expectedTransporters_W33N5 + '/200)\t</td>' +
        //                         '<td>' + upgraders_W33N5.length + '(' + expectedUpgraders_W33N5 + '/650)\t</td>' +
        //                     '</tr>' +
        //                 '</table></font>';
        // console.log(HTMLSheet);

        //special rule
        //1.Spawn_W34N4_2 Gen supplier @W34N2 22, 19
        // var supplier = Game.spawns['Spawn_W34N2_2'].pos.findInRange(FIND_MY_CREEPS, 10, {
        //     filter: (creep) => creep.memory.role == 'supplier'
        // });
        // if (supplier.length == 0) {
        //     var newName = 'Supplier' + Game.time;
        //     console.log('Spawning new Supplier: ' + newName);
        //     Game.spawns['Spawn_W34N2_2'].spawnCreep([CARRY,CARRY,MOVE], newName,
        //         {memory: {role: 'supplier'}});
        // }
    }
}

module.exports = autoSpawn;
