var LadderLexer = require('./parser/LadderLexer').LadderLexer;
var LadderParserVisitor = require('./parser/LadderParserVisitor').LadderParserVisitor;
var ParseDevice = require('./DeviceParser').ParseDevice;

//////////////////
// CalcVisitor
function LadderExecutor(devList) {
    LadderParserVisitor.call(this);
    this.devList = devList;
    return this;
}

Object.setPrototypeOf(LadderExecutor.prototype, LadderParserVisitor.prototype);

// Visit a parse tree produced by LadderParser#mnemonicList.
LadderParserVisitor.prototype.visitMnemonicList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#mnemonic.
LadderParserVisitor.prototype.visitMnemonic = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#opNumber.
LadderParserVisitor.prototype.visitOpNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#opString.
LadderParserVisitor.prototype.visitOpString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#opDev.
LadderParserVisitor.prototype.visitOpDev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#opUnknown.
LadderParserVisitor.prototype.visitOpUnknown = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#opIdentifier.
LadderParserVisitor.prototype.visitOpIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#unknown.
LadderParserVisitor.prototype.visitUnknown = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#devGobal.
LadderParserVisitor.prototype.visitDevGobal = function(ctx) {
  console.log("-- visitDevGobal");
  var devToken = ctx.getToken(LadderLexer.GLOBAL_DEVICE, 0);
  console.log('Device:'+devToken);
  var val = ParseDevice(devToken.symbol.text);
  console.log(val);
  return val;
};


// Visit a parse tree produced by LadderParser#devLocal.
LadderParserVisitor.prototype.visitDevLocal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#devIndirectGlobal.
LadderParserVisitor.prototype.visitDevIndirectGlobal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#devIndirectLocal.
LadderParserVisitor.prototype.visitDevIndirectLocal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#offsetNum.
LadderParserVisitor.prototype.visitOffsetNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#offsetDev.
LadderParserVisitor.prototype.visitOffsetDev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numHex.
LadderParserVisitor.prototype.visitNumHex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numFloat.
LadderParserVisitor.prototype.visitNumFloat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#numInt.
LadderParserVisitor.prototype.visitNumInt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#string.
LadderParserVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#chars.
LadderParserVisitor.prototype.visitChars = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LadderParser#endl.
LadderParserVisitor.prototype.visitEndl = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LadderExecutor = LadderExecutor;