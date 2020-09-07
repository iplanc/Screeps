var autoLabtory = {

    run: function(roomname) {
        switch (roomname) {
            case "W34N2":
                var K_lab = Game.getObjectById('5e7605e139587a64126a7dea');
                var Z_lab = Game.getObjectById('5e75f25b53ab5edf39346461');
                var U_lab = Game.getObjectById('5ee07f9f05fd8e8fa76be517');
                var L_lab = Game.getObjectById('5ee07040996366b60acb1933');
                var ZK_lab = Game.getObjectById('5e6650026cce638229577bd9');
                var UL_lab = Game.getObjectById('5ee0a9cb1e55d6610b59e709');
                var G_lab = Game.getObjectById('5e761e9539587a21f96a8827');
                break;
        }
        ZK_lab.runReaction(Z_lab, K_lab);
        UL_lab.runReaction(U_lab, L_lab);
        G_lab.runReaction(ZK_lab, UL_lab);
    }
}

module.exports = autoLabtory;
