var augur = require("augur.js");

var options = {
    http: "http://augur26.eastus.cloudapp.azure.com:8545",
    ws: null,
    contracts: {buyAndSellShares:"0x5e4b2597982ef4f9418d0888598e46d933c0aea8",closeMarket:"0xce7a01558a31e52acc00b2e93f986c4a8a300083",closeMarketEight:"0x637895b4fa64c5110f1a7906d830221fec27c1a1",closeMarketFour:"0x4f7c34cadd54774aff0a59e4511112d6fb6af7b5",closeMarketOne:"0x60686ab40f7b119d46d48c84592e48d5ec0e1ae5",closeMarketTwo:"0xa84c27d57ea7835f31aee20e3f8440f1915fabad",collectFees:"0xb3eea8e25817eeb8c8cd6881e2180bef52547f5f",completeSets:"0xe4571b25984c91d084427023e7b5bdb0d134eb49",compositeGetters:"0xb1f194a8f5c2d744a0c8e2b50c28fab281b6dd66",consensus:"0x71b1afb93e5827b7989cf5dd060df37cbb3e537d",createBranch:"0x3a88b9a686cc80effb6ec9b652558af4deff6c6c",createMarket:"0xe5876c658820433902efe27c03d7220a1862178b",eventResolution:"0x774ce847bdeeda2b43cc24f213fa43076f55e9dc",faucets:"0x8a210d3b6696e684babaf1dbcb0495c69a0023eb",forkPenalize:"0x7a946a1d3f74221b5b6dece39c507e1cdcad29be",forking:"0xc7cc377e27bc7b5432635025fece42f4364cef87",makeReports:"0x892ef62b0704bf33dd5529bb23ec5c2568d1b256",penalizationCatchup:"0xad425789756d53bba879cc893bb1a6e28ff18c3d",penalizeNotEnoughReports:"0x709ef6cff1a9034c17c1c7ac3acceeed704231d6",roundTwo:"0x929779562a1a03d98206ea94d29372a6efb8c28e",roundTwoPenalize:"0x720b3208cae428fcda7466a4feb09caf1b5a606f",sendReputation:"0x2d08f65f6706698c0289b78e5a97ca5bdaefdc33",slashRep:"0x66c0c91f5aa44ccd12b26dafc0b154faba2dfcb8",trade:"0xf91f47ebb23fb936a14841ea8a0d50f6c5e40986",backstops:"0xe2d193b7769202d58239dc312143d5ccc74b7e4c",branches:"0xf7a71c98e2fada3a853a77fd6fcf69ac6d20f0a6",cash:"0x8e123ef6ce5e7a39f34cf957e6862772ed5d8941",consensusData:"0x547c5867e4435073c14d80b70cf01e436944b195",events:"0xffdbe37908443952502fc502eed0cc4d55ab305d",expiringEvents:"0xd915c293cf762b665bf5835712de244029ea3109",fxpFunctions:"0x2407d5ab8db2ad445f18c814ff027ece91943573",info:"0xd2e6b2cc7df9927296cb12e4c69ecab025f07e8f",markets:"0x1444fa8f5021c5fb8507fdee3c95833d1b866f81",reporting:"0xd4298e5e6a8811b0889dba23a33fc6226f706b82",trades:"0xae973e8387bd684daee78f2cfe5d4c47e64053d8"}
};

augur.connect(options, function() {
	var FREEBIE_ETH = 5;
    augur.rpc.sendEther({
    	to: "0x7fbe93bc104ac4bcae5d643fd3747e1866f1ece4",
    	value: FREEBIE_ETH,
    	from: augur.coinbase,
    	onSent: function (res){
    		console.log("Sent", res);
    	},
    	onFailed: function (res){
    		console.log("Failed", res);
    	},
    	onSuccess: function (res) {
    		console.log("Success", res);
    	}
	});
});

//augur.connect(options, function() {console.log("ok ");});
	
	//debugger;
	//augur.getBranches(function (marketsInfo) { console.log(marketsInfo);});
//});

//this.nodes.hosted=["https://eth3.augur.net"]
//this.wsUrl="wss://ws.augur.net"