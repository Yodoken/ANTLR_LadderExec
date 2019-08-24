var LadderLexer = require('./parser/ladderLexer').LadderLexer;
var LadderParserVisitor = require('./parser/LadderParserVisitor').LadderParserVisitor;
var parseDevice = require('./DeviceParser').parseDevice;
var instructionTable = require('./InstructionTable').instructionTable;

//////////////////
// CalcVisitor
function LadderVisitor(devPool) {
    LadderParserVisitor.call(this);
    this.context = {
      "devPool": devPool,   // デバイスの状態（ストレージ）
      "ba": false,          // 母線の状態
      "inst": {             // 現在処理中の命令語情報
        name: "",           //   命令語
        suffix: ""          //   サフィックス
      },
      "op": [{              // オペランドの配列
        type: "none",       // オペランド種別('dev'/'num')
        device: {           // 'dev'の時、デバイスアドレス
          devType: -1,      // デバイス種別
          devNo: -1         // デバイス番号
        },
        value: undefined    // 'num'の時、値
      }]
    };
    
    return this;
}

Object.setPrototypeOf(LadderVisitor.prototype, LadderParserVisitor.prototype);

// Visit a parse tree produced by LadderParser#mnemonicList.
LadderVisitor.prototype.visitMnemonicList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#mnemonic.
LadderVisitor.prototype.visitMnemonic = function(ctx) {
  // コンテキストを更新
  instName = ctx.inst.text.toLowerCase();
  this.context.inst.name = instName;
  this.context.op = [];
  
  // 命令語テーブルから命令語の定義情報を取得
  var instDef = instructionTable.find(function(v) {
    return v.name.toLowerCase() === instName;
  });
  if (!instDef) {
    throw {
      "error": "Unknown Instruction'"+instName+"'.",
      "line": ctx.start.line,
      "col": ctx.start.start
    };
  }

  // オペランドの数をチェック
  if (ctx.op.length != instDef.operand.length) {
    //console.log(ctx);
    throw {
      "error": "Expected operand count is "+instDef.operand.length+". But "+ctx.op.length+".",
      "line": ctx.start.line,
      "col": ctx.start.start
    };
  }

  // オペランドの解析と種別チェック
  for (i = 0; i < ctx.op.length; i++) {
    var op = this.visit(ctx.op[i])[0];
    var res = instDef.operand[i].find(function(v) {
      return v === op.type;
    });
    if (!res) {
      throw {
        "error": "Invalid operand.",
        "line": ctx.start.line,
        "col": ctx.start.start
      };
    }
    this.context.op.push(op);
  }

  // 命令語を実行
  if (instDef) {
    instDef.exec(this.context);
  }
  return {};
};


// Visit a parse tree produced by LadderParser#devGobal.
LadderVisitor.prototype.visitDevGobal = function(ctx) {
  //console.log("-- visitDevGobal");
  var devToken = ctx.getToken(LadderLexer.GLOBAL_DEVICE, 0);
  //console.log('Device:'+devToken);
  var device = parseDevice(devToken.symbol.text);
  if ("error" in device) {
    return {
      "error": "Invalid device.",
      "device": device
    };
  }
  return {
    "type": 'dev',
    "device": device
  };
};


// Visit a parse tree produced by LadderParser#devLocal.
LadderVisitor.prototype.visitDevLocal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#offsetNum.
LadderVisitor.prototype.visitOffsetNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#offsetDev.
LadderVisitor.prototype.visitOffsetDev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numHex.
LadderVisitor.prototype.visitNumHex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numFloat.
LadderVisitor.prototype.visitNumFloat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numInt.
LadderVisitor.prototype.visitNumInt = function(ctx) {
  return this.visitChildren(ctx);
};


exports.LadderVisitor = LadderVisitor;