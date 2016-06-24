var options = {
     http: "http://localhost:8545",
     ws: null
};

var augur = require("augur.js");

augur.connect(options);

console.log(augur.getCashBalance('0xad9bd4391f5d0e507db06c827a9b1581f8085cde'));

augur.createSingleEventMarket({
    branchId: augur.branches.dev,
    description: "Will the temperature in Austin, TX be > 90F on July 1, 2064?",
    expDate: new Date("7/2/2064").getTime() / 1000,
    minValue: 1,
    maxValue: 2,
    numOutcomes: 2,
    makerFee: ".002",
    takerFee: ".005",
    tags: ["weather", "temperature", "climate change"],
    extraInfo: "Hello world!  Are you getting hotter?",
    resolution: "generic",
    onSent: function (sentResponse) {console.log("MarketSentResponse:", sentResponse);},
    onSuccess: function (successResponse) { console.log("MarketSuccessResponse:", successResponse); },
    onFailed: function (failedResponse) { console.log("MarketFailedResponse:", failedResponse);}
});

augur.fundNewAccount(augur.branches.dev, function (r) { console.log(r); }, function (r) { console.log(r); }, function (r) { console.log(r); })
