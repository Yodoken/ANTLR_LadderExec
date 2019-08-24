var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var ladder = new LadderExecutor();

try {
    ladder.writeDev('DM0', 100);
    ladder.writeDev('DM1', 20);
    ladder.writeDev('DM2', 40);
    ladder.writeDev('R0', true);
    ladder.writeDev('R1', true);
    ladder.writeDev('R100', true);
    
    ladder.execute("LD R0\nMOV DM0 DM2");
    
    console.log('DM0:'+ladder.readDev('DM0'));
    console.log('DM1:'+ladder.readDev('DM1'));
    console.log('DM2:'+ladder.readDev('DM2'));
} catch(e) {
    console.log('Error: '+e.error);
    console.log('Line: '+e.line);
}
