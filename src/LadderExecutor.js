var antlr4 = require('antlr4/index');
var LadderLexer = require('./parser/ladderLexer').LadderLexer;
var LadderParser = require('./parser/ladderParser').LadderParser;
var LadderVisitor = require('./LadderVisitor').LadderVisitor;
var DevicePool = require('./DevicePool').DevicePool;


function LadderExecutor() {
	this.devPool = new DevicePool();
	return this;
}

LadderExecutor.prototype.constructor = LadderExecutor;


LadderExecutor.prototype.execute = function(mnemonicList) {
    var chars = new antlr4.InputStream(mnemonicList);
    var lexer = new LadderLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new LadderParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.mnemonicList();

    tree.accept(new LadderVisitor(this.devPool));
}


exports.LadderExecutor = LadderExecutor;