

function getWord(ctx, operand) {
    if (operand.type === 'dev') {
        return ctx.devPool.readWord(operand.device);
    } else if (operand.type === 'num') {
        return operand.value;
    } else {
        return undefined;
    }
}

//////////////////
// DeviceTable
exports.instructionTable = [
    {
        "name": "LD",
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = ctx.devPool.readBit(ctx.op[0].device);
        }
    },
    {
        "name": "LDB",
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = !ctx.devPool.readBit(ctx.op[0].device);
        }
    },
    {
        "name": "MOV",
        "operand": [['dev','num'], ['dev']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                var value = getWord(ctx, ctx.op[0]);
                if (value) {
                    ctx.devPool.writeWord(ctx.op[1].device, value);
                } else {
                    throw {"error": "Invalid operand type."}
                }
            }
        }
    },
    {
        "name": "CAL+",
        "operand": [['dev'], ['dev','num'], ['dev','num']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                var lhs = getWord(ctx, ctx.op[1]);
                var rhs = getWord(ctx, ctx.op[2]);
                if (lhs != undefined && rhs != undefined) {
                    ctx.devPool.writeWord(ctx.op[0].device, lhs + rhs);
                } else {
                    throw new Error("Unknown operand type.");
                }
            }
        }
    }
];