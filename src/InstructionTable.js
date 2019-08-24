

function getValue(ctx, operand) {
    if (operand.type === 'dev') {
        return ctx.devPool.read(operand.device);
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
            ctx.ba = getValue(ctx, ctx.op[0]);
        }
    },
    {
        "name": "LDB",
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = !getValue(ctx, ctx.op[0]);
        }
    },
    {
        "name": "MOV",
        "operand": [['dev','num'], ['dev']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                var value = getValue(ctx, ctx.op[0]);
                if (value) {
                    ctx.devPool.write(ctx.op[1].device, value);
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
                var lhs = getValue(ctx, ctx.op[1]);
                var rhs = getValue(ctx, ctx.op[2]);
                if (lhs && rhs) {
                    ctx.devPool.write(ctx.op[0].device, lhs + rhs);
                } else {
                    throw {"error": "Unknown operand type."}
                }
            }
        }
    }
];