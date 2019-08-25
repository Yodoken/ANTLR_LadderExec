var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var ladder = new LadderExecutor();

try {
    ladder.devPool.writeDWord('DM0', 100);
    ladder.devPool.writeDWord('DM2', 20);
    ladder.devPool.writeDWord('DM4', 100000);
    ladder.devPool.writeSFloat('DM6', 1.1);
    ladder.devPool.writeBit('R0', true);
    ladder.devPool.writeBit('R1', true);
    ladder.devPool.writeBit('R100', false);
    ladder.devPool.writeSWord('Z1', -2);
    
    ladder.execute(
        "LD R0\n"+
        "MOV.D DM2:Z1 DM2\n"+
        "MOV.F DM6 DM8\n"+
        "LDB R100\n"+
        "CAL+.D DM10 DM2 DM6:#-2\n"+
        "CAL+.F DM12 DM8 #1.4"
    );
    
    console.log('DM0:'+ladder.devPool.readDWord('DM0'));
    console.log('DM2:'+ladder.devPool.readDWord('DM2'));
    console.log('DM4:'+ladder.devPool.readDWord('DM4'));
    console.log('DM8:'+ladder.devPool.readSFloat('DM8'));
    console.log('DM10:'+ladder.devPool.readDWord('DM10'));
    console.log('DM12:'+ladder.devPool.readSFloat('DM12'));
} catch(e) {
    console.log(e);
}
