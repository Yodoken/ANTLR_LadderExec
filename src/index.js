var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var ladder = new LadderExecutor();
ladder.writeDev('DM0', 100);
ladder.writeDev('DM1', 20);
ladder.writeDev('DM2', 40);
ladder.writeDev('R0', true);
ladder.writeDev('R1', true);
ladder.writeDev('R100', true);

ladder.execute("LD R0\nMOV DM0 DM1");

console.log('DM1:'+ladder.readDev('DM1'));
