var antlr4 = require('antlr4/index');
var LadderLexer = require('./parser/ladderLexer').LadderLexer;
var LadderParser = require('./parser/ladderParser').LadderParser;
var LadderExecutor = require('./LadderExecutor').LadderExecutor;

var chars = new antlr4.InputStream("LD R0\nMOV DM0 DM1");
var lexer = new LadderLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new LadderParser(tokens);
parser.buildParseTrees = true;
var tree = parser.mnemonicList();
//console.log(this.varList);

var devList = {
    'DM': {
        "0": 100,
        "1": 20,
        "2": 40
    },
    'R': {
        "0": true
    }
};
console.log(tree.accept(new LadderExecutor(devList)));
