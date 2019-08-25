

function getWord(ctx, operand) {
    if (operand.type === 'dev') {
        return ctx.devPool.readWord(operand.device);
    } else if (operand.type === 'num') {
        if (operand.dataType === 'int') {
            return operand.value;
        }
    }
    return undefined;
}

function getDWord(ctx, operand) {
    if (operand.type === 'dev') {
        return ctx.devPool.readDWord(operand.device);
    } else if (operand.type === 'num') {
        if (operand.dataType === 'int') {
            return operand.value;
        }
    }
    return undefined;
}

function getSFloat(ctx, operand) {
    if (operand.type === 'dev') {
        return ctx.devPool.readSFloat(operand.device);
    } else if (operand.type === 'num') {
        return operand.value;
    }
    return undefined;
}

//////////////////
// DeviceTable
exports.instructionTable = [
    {
        "name": "LD",
        "suffix": null,
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = ctx.devPool.readBit(ctx.op[0].device);
        }
    },
    {
        "name": "LDB",
        "suffix": null,
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = !ctx.devPool.readBit(ctx.op[0].device);
        }
    },
    {
        "name": "MOV",
        "suffix": ['u','s','d','l','f','df'],
        "operand": [['dev','num'], ['dev']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                switch (ctx.inst.suffix) {
                    case 'u':
                        var value = getWord(ctx, ctx.op[0]);
                        if (value) {
                            ctx.devPool.writeWord(ctx.op[1].device, value);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    case 'd':
                        var value = getDWord(ctx, ctx.op[0]);
                        if (value) {
                            ctx.devPool.writeDWord(ctx.op[1].device, value);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    case 'f':
                        var value = getSFloat(ctx, ctx.op[0]);
                        if (value) {
                            ctx.devPool.writeSFloat(ctx.op[1].device, value);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    default:
                        // ここには来ないはず
                        throw new Error("Internal error.");
                }
            }
        }
    },
    {
        "name": "CAL+",
        "suffix": ['u','s','d','l','f','df'],
        "operand": [['dev'], ['dev','num'], ['dev','num']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                switch (ctx.inst.suffix) {
                    case 'u':
                        var lhs = getWord(ctx, ctx.op[1]);
                        var rhs = getWord(ctx, ctx.op[2]);
                        if (lhs != undefined && rhs != undefined) {
                            ctx.devPool.writeWord(ctx.op[0].device, lhs + rhs);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    case 'd':
                        var lhs = getDWord(ctx, ctx.op[1]);
                        var rhs = getDWord(ctx, ctx.op[2]);
                        if (lhs != undefined && rhs != undefined) {
                            ctx.devPool.writeDWord(ctx.op[0].device, lhs + rhs);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    case 'f':
                        var lhs = getSFloat(ctx, ctx.op[1]);
                        var rhs = getSFloat(ctx, ctx.op[2]);
                        if (lhs != undefined && rhs != undefined) {
                            ctx.devPool.writeSFloat(ctx.op[0].device, lhs + rhs);
                        } else {
                            throw new Error("Invalid operand.");
                        }
                        break;
                    default:
                        // ここには来ないはず
                        throw new Error("Internal error.");
                }
            }
        }
    }
];