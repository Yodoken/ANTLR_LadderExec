

//////////////////
// DeviceTable
exports.instructionTable = [
    {
        "name": "LD",
        "operand": [['dev']],
        "left": true,
        "exec": function(ctx) {
            ctx.ba = ctx.devPool.read(ctx.op[0].device);
        }
    },
    {
        "name": "MOV",
        "operand": [['dev','num'], ['dev']],
        "left": false,
        "exec": function(ctx) {
            // ###mada サフィックスの扱い
            if (ctx.ba) {
                if (ctx.op[0].type === 'dev') {
                    ctx.devPool.write(ctx.op[1].device, ctx.devPool.read(ctx.op[0].device));
                } else if (ctx.op[0].type === 'num') {
                    ctx.devPool.write(ctx.op[1].device, ctx.op[0].value);
                } else {
                    throw {"error": "Unknown operand type."}
                }
            }
        }
    }
];