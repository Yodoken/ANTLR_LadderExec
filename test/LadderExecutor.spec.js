
var LadderExecutor = require('../src/LadderExecutor.js').LadderExecutor;

describe('ラダー実行テスト', function() {

    describe('LD', function() {
        it("LD-true", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(100);
            expect(ladder.devPool.readWord('DM1')).toEqual(0);
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
            expect(ladder.devPool.readWord('DM3')).toEqual(0);
        });
        it("LD-false", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', false);
            ladder.execute(
                "LD R0\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(100);
            expect(ladder.devPool.readWord('DM1')).toEqual(0);
            expect(ladder.devPool.readWord('DM2')).toEqual(20);
            expect(ladder.devPool.readWord('DM3')).toEqual(0);
        });
        it("LDB-true", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LDB R0\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(100);
            expect(ladder.devPool.readWord('DM1')).toEqual(0);
            expect(ladder.devPool.readWord('DM2')).toEqual(20);
            expect(ladder.devPool.readWord('DM3')).toEqual(0);
        });
        it("LDB-false", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', false);
            ladder.execute(
                "LDB R0\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(100);
            expect(ladder.devPool.readWord('DM1')).toEqual(0);
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
            expect(ladder.devPool.readWord('DM3')).toEqual(0);
        });
    });
    describe('MOV', function() {
        it("#", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeDWord('DM2', 0);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV.D #123 DM2\n"
            );
            expect(ladder.devPool.readDWord('DM2')).toEqual(123);
        });
        it(".D", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeDWord('DM0', 100);
            ladder.devPool.writeDWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV.D DM0 DM2\n"
            );
            expect(ladder.devPool.readDWord('DM0')).toEqual(100);
            expect(ladder.devPool.readDWord('DM2')).toEqual(100);
        });
        it(".F", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeSFloat('DM0', -1.25);
            ladder.devPool.writeDWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV.D DM0 DM2\n"
            );
            expect(ladder.devPool.readSFloat('DM0')).toEqual(-1.25);
            expect(ladder.devPool.readSFloat('DM2')).toEqual(-1.25);
        });
    });
    describe('Index modification', function() {
        it("DM0:#1", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM1', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV DM0:#1 DM2\n"
            );
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
        });
        it("R1:#-1", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R1:#-1\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
        });
        it("DM0:Z1(Z1=1)", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM1', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeSWord('Z1', 1);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "MOV DM0:Z1 DM2\n"
            );
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
        });
        it("R1:Z1(Z1=-1)", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 100);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeSWord('Z1', -1);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R1:Z1\n"+
                "MOV DM0 DM2\n"
            );
            expect(ladder.devPool.readWord('DM2')).toEqual(100);
        });
    });
    describe('CAL+', function() {
        it(".U(suffix omitted)", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 5);
            ladder.devPool.writeWord('DM1', 10);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "CAL+ DM0 DM1 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(30);
        });
        it(".U", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeWord('DM0', 5);
            ladder.devPool.writeWord('DM1', 10);
            ladder.devPool.writeWord('DM2', 20);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "CAL+.U DM0 DM1 DM2\n"
            );
            expect(ladder.devPool.readWord('DM0')).toEqual(30);
        });
        it(".D", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeDWord('DM0', 100);
            ladder.devPool.writeDWord('DM2', 20);
            ladder.devPool.writeDWord('DM4', 50);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "CAL+.D DM0 DM2 DM4\n"
            );
            expect(ladder.devPool.readDWord('DM0')).toEqual(70);
        });
        it(".F", function() {
            var ladder = new LadderExecutor();
            ladder.devPool.writeSFloat('DM0', -1.25);
            ladder.devPool.writeSFloat('DM2', 2.0);
            ladder.devPool.writeSFloat('DM4', 1.25);
            ladder.devPool.writeBit('R0', true);
            ladder.execute(
                "LD R0\n"+
                "CAL+.F DM0 DM2 DM4\n"
            );
            expect(ladder.devPool.readSFloat('DM0')).toEqual(2.0+1.25);
        });
    });
});

