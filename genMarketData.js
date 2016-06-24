var crypto = require("crypto");

var markets = {};


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var times = 1;
for(var i=0; i < times; i++){
	var id ="-0x"+crypto.randomBytes(32).toString("hex");
	var market = {};
	market['_id'] = id;
	market['tradingPeriod'] = getRandom(100000000, 1500000000);
	market['tradingFee'] = "0.01999999999999999998";
	market['creationTime'] = getRandom(100000000, 1500000000);
	market['volume'] = 100;
	market['tag1'] = "Sports";
	market['tag2'] = "Politics";
	market['tag3'] = "Weather";
	market['description'] = "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015? Choices: Higher, Lower, Unchanged";
    markets[id]=market;
}

//console.log(JSON.stringify(markets));
console.log(markets['test']);


/*
info[0] = marketID
        info[1] = self.Markets[marketID].tradingPeriod
        info[2] = self.Markets[marketID].tradingFee
        info[3] = self.Markets[marketID].creationTime
        info[4] = self.Markets[marketID].volume
        info[5] = self.Markets[marketID].tag1
        info[6] = self.Markets[marketID].tag2
        info[7] = self.Markets[marketID].tag3
        info[8+whatever] = description
        */