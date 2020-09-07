var autoDeal = {
    
    run: function(marketMode) {
        if (marketMode) {
            for (var name in Game.rooms) {
                if (Game.rooms[name].terminal == null) continue;
                Terminal = Game.rooms[name].terminal;
                
                // sell keanium
                if (Terminal.store.getUsedCapacity(RESOURCE_KEANIUM) > 0) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_KEANIUM});
                    buyOrder.sort((a,b) => b.price - a.price);
                    var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
                    if (buyOrder[0].price > 0.000) {
                        if (Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName) == OK) {
                            console.log('sold 100 keanium with ' + tax + ' tax.');
                        }
                    }
                }
                
                // sell utrium
                if (Terminal.store.getUsedCapacity(RESOURCE_UTRIUM) > 0) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM});
                    buyOrder.sort((a,b) => b.price - a.price);
                    var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
                    if (buyOrder[0].price > 0.000) {
                        if (Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName) == OK) {
                            console.log('sold 100 utrium with ' + tax + ' tax.');
                        }
                    }
                }
                
                //sell utrium bar
                if (Terminal.store.getUsedCapacity(RESOURCE_UTRIUM_BAR) > 0) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM_BAR});
                    buyOrder.sort((a,b) => b.price - a.price);
                    if (buyOrder.length > 0) {
                        var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
                        if (buyOrder[0].price > 0.010) {
                            if (Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName) == OK) {
                                console.log('sold 100 utrium bar with ' + tax + ' tax.');
                            }
                        }
                    }
                }
                
                //sell keanium bar
                if (Terminal.store.getUsedCapacity(RESOURCE_KEANIUM_BAR) > 0) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_KEANIUM_BAR});
                    buyOrder.sort((a,b) => b.price - a.price);
                    if (buyOrder.length > 0) {
                        var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
                        if (buyOrder[0].price > 0.010) {
                            if (Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName) == OK) {
                                console.log('sold 100 keanium bar with ' + tax + ' tax.');
                            }
                        }
                    }
                }
                
                
                //sell battery
                if (Terminal.store.getUsedCapacity(RESOURCE_BATTERY) > 0) {
                    var buyOrder = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_BATTERY});
                    buyOrder.sort((a,b) => b.price - a.price);
                    if (buyOrder.length > 0) {
                    var tax = Game.market.calcTransactionCost(100, buyOrder[0].roomName, Terminal.pos.roomName);
                        if (buyOrder[0].price > 0.010) {
                            if (Game.market.deal(buyOrder[0].id, 100, Terminal.pos.roomName) == OK) {
                                console.log('sold 100 battery with ' + tax + ' tax.');
                            }
                        }
                    }
                }
                
                // keep energy to 10000
                // if (Terminal.store.getUsedCapacity(RESOURCE_ENERGY) < 10000) {
                //     var sellOrder = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_ENERGY});
                //     sellOrder.sort((a,b) => a.price - b.price);
                //     if (sellOrder.length > 0) {
                //         var tax = Game.market.calcTransactionCost(10000 - Terminal.store.getUsedCapacity(RESOURCE_ENERGY), buyOrder[0].roomName, Terminal.pos.roomName);
                //         if (sellOrder[0].price > 0.000) {
                //             if ((10000 - Terminal.store.getUsedCapacity(RESOURCE_ENERGY) + tax) > 10) {
                //                 if (Game.market.deal(sellOrder[0].id, 10000 - Terminal.store.getUsedCapacity(RESOURCE_ENERGY) + tax, Terminal.pos.roomName) == OK) {
                //                     console.log('buy in ' + (10000 - Terminal.store.getUsedCapacity(RESOURCE_ENERGY)) + ' energy.');
                //                 }
                //             }
                //         }
                //     }
                // }
            }
        }
    }
};

module.exports = autoDeal;