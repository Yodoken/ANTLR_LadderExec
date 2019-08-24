var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var ladder = new LadderExecutor();

try {
    ladder.devPool.writeWord('DM0', 100);
    ladder.devPool.writeWord('DM1', 20);
    ladder.devPool.writeWord('DM2', 40);
    ladder.devPool.writeBit('R0', true);
    ladder.devPool.writeBit('R1', true);
    ladder.devPool.writeBit('R100', false);
    ladder.devPool.writeSWord('Z1', -1);
    
    ladder.execute(
        "LD R0\n"+
        "MOV DM1:Z1 DM2\n"+
        "LDB R100\n"+
        "CAL+ DM10 DM1 DM4:#-2"
    );
    
    console.log('DM0:'+ladder.devPool.readWord('DM0'));
    console.log('DM1:'+ladder.devPool.readWord('DM1'));
    console.log('DM2:'+ladder.devPool.readWord('DM2'));
    console.log('DM10:'+ladder.devPool.readWord('DM10'));
} catch(e) {
    console.log(e);
}
