var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var ladder = new LadderExecutor();

try {
    ladder.writeDev('DM0', 100);
    ladder.writeDev('DM1', 20);
    ladder.writeDev('DM2', 40);
    ladder.writeDev('R0', true);
    ladder.writeDev('R1', true);
    ladder.writeDev('R100', false);
    ladder.writeDev('Z1', -1);
    
    ladder.execute("LD R0\nMOV DM1:Z1 DM2\nLDB R100\nCAL+ DM10 DM1 DM4:#-2");
    
    console.log('DM0:'+ladder.readDev('DM0'));
    console.log('DM1:'+ladder.readDev('DM1'));
    console.log('DM2:'+ladder.readDev('DM2'));
    console.log('DM10:'+ladder.readDev('DM10'));
} catch(e) {
    console.log(e);
}
