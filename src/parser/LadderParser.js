// Generated from LadderParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LadderParserVisitor = require('./LadderParserVisitor').LadderParserVisitor;

var grammarFileName = "LadderParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0015m\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b\u0002",
    "\u0003\u0002\u0007\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0003\u0007\u0003*\n",
    "\u0003\f\u0003\u000e\u0003-\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00046",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006",
    "<\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006@\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006E\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006J\n\u0006\u0005\u0006L\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007R\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0005\bW\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0007\n^\n\n",
    "\f\n\u000e\na\u000b\n\u0003\u000b\u0003\u000b\u0006\u000be\n\u000b\r",
    "\u000b\u000e\u000bf\u0005\u000bi\n\u000b\u0003\f\u0003\f\u0003\f\u0002",
    "\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002",
    "\u0003\u0004\u0002\u0013\u0013\u0015\u0015\u0002v\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u00065\u0003\u0002",
    "\u0002\u0002\b7\u0003\u0002\u0002\u0002\nK\u0003\u0002\u0002\u0002\f",
    "Q\u0003\u0002\u0002\u0002\u000eV\u0003\u0002\u0002\u0002\u0010X\u0003",
    "\u0002\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014h\u0003\u0002",
    "\u0002\u0002\u0016j\u0003\u0002\u0002\u0002\u0018\u001a\u0005\u0014",
    "\u000b\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002",
    "\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c!\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002",
    "\u0002\u0002\u001e \u0005\u0004\u0003\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"\u0003\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002$&\u0007\n\u0002\u0002%\'\u0007\u000b\u0002\u0002",
    "&%\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'+\u0003\u0002",
    "\u0002\u0002(*\u0005\u0006\u0004\u0002)(\u0003\u0002\u0002\u0002*-\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",.\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0005\u0014\u000b",
    "\u0002/\u0005\u0003\u0002\u0002\u000206\u0005\u000e\b\u000216\u0005",
    "\u0010\t\u000226\u0005\n\u0006\u000236\u0005\b\u0005\u000246\u0005\u0016",
    "\f\u000250\u0003\u0002\u0002\u000251\u0003\u0002\u0002\u000252\u0003",
    "\u0002\u0002\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002\u0002",
    "6\u0007\u0003\u0002\u0002\u000278\u0007\t\u0002\u00028\t\u0003\u0002",
    "\u0002\u00029;\u0007\u000f\u0002\u0002:<\u0005\f\u0007\u0002;:\u0003",
    "\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<L\u0003\u0002\u0002\u0002",
    "=?\u0007\u0010\u0002\u0002>@\u0005\f\u0007\u0002?>\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@L\u0003\u0002\u0002\u0002AB\u0007\u0006",
    "\u0002\u0002BD\u0007\u000f\u0002\u0002CE\u0005\f\u0007\u0002DC\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EL\u0003\u0002\u0002\u0002",
    "FG\u0007\u0006\u0002\u0002GI\u0007\u0010\u0002\u0002HJ\u0005\f\u0007",
    "\u0002IH\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002",
    "\u0002\u0002K9\u0003\u0002\u0002\u0002K=\u0003\u0002\u0002\u0002KA\u0003",
    "\u0002\u0002\u0002KF\u0003\u0002\u0002\u0002L\u000b\u0003\u0002\u0002",
    "\u0002MN\u0007\b\u0002\u0002NR\u0005\u000e\b\u0002OP\u0007\b\u0002\u0002",
    "PR\u0007\u000f\u0002\u0002QM\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002",
    "\u0002R\r\u0003\u0002\u0002\u0002SW\u0007\u000e\u0002\u0002TW\u0007",
    "\r\u0002\u0002UW\u0007\f\u0002\u0002VS\u0003\u0002\u0002\u0002VT\u0003",
    "\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002W\u000f\u0003\u0002\u0002",
    "\u0002XY\u0007\u0011\u0002\u0002YZ\u0005\u0012\n\u0002Z[\u0007\u0014",
    "\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\^\t\u0002\u0002\u0002]",
    "\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`\u0013\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002bi\u0007\u0002\u0002\u0003ce\u0007\u0005\u0002\u0002",
    "dc\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002hb\u0003\u0002",
    "\u0002\u0002hd\u0003\u0002\u0002\u0002i\u0015\u0003\u0002\u0002\u0002",
    "jk\u0007\u0012\u0002\u0002k\u0017\u0003\u0002\u0002\u0002\u0011\u001b",
    "!&+5;?DIKQV_fh"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "'*'", "';'", "':'", "'???'", 
                     null, null, null, null, null, null, null, null, null, 
                     "'\"\"'" ];

var symbolicNames = [ null, "COMMENT", "WS", "NEWLINE", "INDIRECT", "SEMICORON", 
                      "CORON", "UNKNOWN", "INSTRUCTION", "SUFFIX", "INTEGER", 
                      "FLOAT", "HEXADECIMAL", "GLOBAL_DEVICE", "LOCAL_DEVICE", 
                      "QUOTE", "IDENTIFIER", "DBLQUOTE", "RQUOTE", "NOT_ESCCHAR" ];

var ruleNames =  [ "mnemonicList", "mnemonic", "operand", "unknown", "device", 
                   "offset", "number", "string", "chars", "endl", "identifier" ];

function LadderParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LadderParser.prototype = Object.create(antlr4.Parser.prototype);
LadderParser.prototype.constructor = LadderParser;

Object.defineProperty(LadderParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LadderParser.EOF = antlr4.Token.EOF;
LadderParser.COMMENT = 1;
LadderParser.WS = 2;
LadderParser.NEWLINE = 3;
LadderParser.INDIRECT = 4;
LadderParser.SEMICORON = 5;
LadderParser.CORON = 6;
LadderParser.UNKNOWN = 7;
LadderParser.INSTRUCTION = 8;
LadderParser.SUFFIX = 9;
LadderParser.INTEGER = 10;
LadderParser.FLOAT = 11;
LadderParser.HEXADECIMAL = 12;
LadderParser.GLOBAL_DEVICE = 13;
LadderParser.LOCAL_DEVICE = 14;
LadderParser.QUOTE = 15;
LadderParser.IDENTIFIER = 16;
LadderParser.DBLQUOTE = 17;
LadderParser.RQUOTE = 18;
LadderParser.NOT_ESCCHAR = 19;

LadderParser.RULE_mnemonicList = 0;
LadderParser.RULE_mnemonic = 1;
LadderParser.RULE_operand = 2;
LadderParser.RULE_unknown = 3;
LadderParser.RULE_device = 4;
LadderParser.RULE_offset = 5;
LadderParser.RULE_number = 6;
LadderParser.RULE_string = 7;
LadderParser.RULE_chars = 8;
LadderParser.RULE_endl = 9;
LadderParser.RULE_identifier = 10;


function MnemonicListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_mnemonicList;
    this._mnemonic = null; // MnemonicContext
    this.mnm = []; // of MnemonicContexts
    return this;
}

MnemonicListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MnemonicListContext.prototype.constructor = MnemonicListContext;

MnemonicListContext.prototype.endl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndlContext);
    } else {
        return this.getTypedRuleContext(EndlContext,i);
    }
};

MnemonicListContext.prototype.mnemonic = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MnemonicContext);
    } else {
        return this.getTypedRuleContext(MnemonicContext,i);
    }
};

MnemonicListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitMnemonicList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.MnemonicListContext = MnemonicListContext;

LadderParser.prototype.mnemonicList = function() {

    var localctx = new MnemonicListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LadderParser.RULE_mnemonicList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 22;
                this.endl(); 
            }
            this.state = 27;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LadderParser.INSTRUCTION) {
            this.state = 28;
            localctx._mnemonic = this.mnemonic();
            localctx.mnm.push(localctx._mnemonic);
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MnemonicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_mnemonic;
    this.inst = null; // Token
    this.sfx = null; // Token
    this._operand = null; // OperandContext
    this.op = []; // of OperandContexts
    return this;
}

MnemonicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MnemonicContext.prototype.constructor = MnemonicContext;

MnemonicContext.prototype.endl = function() {
    return this.getTypedRuleContext(EndlContext,0);
};

MnemonicContext.prototype.INSTRUCTION = function() {
    return this.getToken(LadderParser.INSTRUCTION, 0);
};

MnemonicContext.prototype.SUFFIX = function() {
    return this.getToken(LadderParser.SUFFIX, 0);
};

MnemonicContext.prototype.operand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandContext);
    } else {
        return this.getTypedRuleContext(OperandContext,i);
    }
};

MnemonicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitMnemonic(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.MnemonicContext = MnemonicContext;

LadderParser.prototype.mnemonic = function() {

    var localctx = new MnemonicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LadderParser.RULE_mnemonic);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        localctx.inst = this.match(LadderParser.INSTRUCTION);
        this.state = 36;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LadderParser.SUFFIX) {
            this.state = 35;
            localctx.sfx = this.match(LadderParser.SUFFIX);
        }

        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LadderParser.INDIRECT) | (1 << LadderParser.UNKNOWN) | (1 << LadderParser.INTEGER) | (1 << LadderParser.FLOAT) | (1 << LadderParser.HEXADECIMAL) | (1 << LadderParser.GLOBAL_DEVICE) | (1 << LadderParser.LOCAL_DEVICE) | (1 << LadderParser.QUOTE) | (1 << LadderParser.IDENTIFIER))) !== 0)) {
            this.state = 38;
            localctx._operand = this.operand();
            localctx.op.push(localctx._operand);
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 44;
        this.endl();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_operand;
    return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;


 
OperandContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OpNumberContext(parser, ctx) {
	OperandContext.call(this, parser);
    this.op = null; // NumberContext;
    OperandContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpNumberContext.prototype = Object.create(OperandContext.prototype);
OpNumberContext.prototype.constructor = OpNumberContext;

LadderParser.OpNumberContext = OpNumberContext;

OpNumberContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
OpNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOpNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpStringContext(parser, ctx) {
	OperandContext.call(this, parser);
    this.op = null; // StringContext;
    OperandContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpStringContext.prototype = Object.create(OperandContext.prototype);
OpStringContext.prototype.constructor = OpStringContext;

LadderParser.OpStringContext = OpStringContext;

OpStringContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};
OpStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOpString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpDevContext(parser, ctx) {
	OperandContext.call(this, parser);
    this.op = null; // DeviceContext;
    OperandContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpDevContext.prototype = Object.create(OperandContext.prototype);
OpDevContext.prototype.constructor = OpDevContext;

LadderParser.OpDevContext = OpDevContext;

OpDevContext.prototype.device = function() {
    return this.getTypedRuleContext(DeviceContext,0);
};
OpDevContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOpDev(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpIdentifierContext(parser, ctx) {
	OperandContext.call(this, parser);
    this.op = null; // IdentifierContext;
    OperandContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpIdentifierContext.prototype = Object.create(OperandContext.prototype);
OpIdentifierContext.prototype.constructor = OpIdentifierContext;

LadderParser.OpIdentifierContext = OpIdentifierContext;

OpIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
OpIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOpIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpUnknownContext(parser, ctx) {
	OperandContext.call(this, parser);
    this.op = null; // UnknownContext;
    OperandContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpUnknownContext.prototype = Object.create(OperandContext.prototype);
OpUnknownContext.prototype.constructor = OpUnknownContext;

LadderParser.OpUnknownContext = OpUnknownContext;

OpUnknownContext.prototype.unknown = function() {
    return this.getTypedRuleContext(UnknownContext,0);
};
OpUnknownContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOpUnknown(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LadderParser.OperandContext = OperandContext;

LadderParser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LadderParser.RULE_operand);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LadderParser.INTEGER:
        case LadderParser.FLOAT:
        case LadderParser.HEXADECIMAL:
            localctx = new OpNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            localctx.op = this.number();
            break;
        case LadderParser.QUOTE:
            localctx = new OpStringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            localctx.op = this.string();
            break;
        case LadderParser.INDIRECT:
        case LadderParser.GLOBAL_DEVICE:
        case LadderParser.LOCAL_DEVICE:
            localctx = new OpDevContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 48;
            localctx.op = this.device();
            break;
        case LadderParser.UNKNOWN:
            localctx = new OpUnknownContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 49;
            localctx.op = this.unknown();
            break;
        case LadderParser.IDENTIFIER:
            localctx = new OpIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 50;
            localctx.op = this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnknownContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_unknown;
    return this;
}

UnknownContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnknownContext.prototype.constructor = UnknownContext;

UnknownContext.prototype.UNKNOWN = function() {
    return this.getToken(LadderParser.UNKNOWN, 0);
};

UnknownContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitUnknown(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.UnknownContext = UnknownContext;

LadderParser.prototype.unknown = function() {

    var localctx = new UnknownContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LadderParser.RULE_unknown);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(LadderParser.UNKNOWN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeviceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_device;
    return this;
}

DeviceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeviceContext.prototype.constructor = DeviceContext;


 
DeviceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DevGobalContext(parser, ctx) {
	DeviceContext.call(this, parser);
    this.dev = null; // Token;
    this.ofs = null; // OffsetContext;
    DeviceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DevGobalContext.prototype = Object.create(DeviceContext.prototype);
DevGobalContext.prototype.constructor = DevGobalContext;

LadderParser.DevGobalContext = DevGobalContext;

DevGobalContext.prototype.GLOBAL_DEVICE = function() {
    return this.getToken(LadderParser.GLOBAL_DEVICE, 0);
};

DevGobalContext.prototype.offset = function() {
    return this.getTypedRuleContext(OffsetContext,0);
};
DevGobalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitDevGobal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DevIndirectLocalContext(parser, ctx) {
	DeviceContext.call(this, parser);
    this.dev = null; // Token;
    this.ofs = null; // OffsetContext;
    DeviceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DevIndirectLocalContext.prototype = Object.create(DeviceContext.prototype);
DevIndirectLocalContext.prototype.constructor = DevIndirectLocalContext;

LadderParser.DevIndirectLocalContext = DevIndirectLocalContext;

DevIndirectLocalContext.prototype.INDIRECT = function() {
    return this.getToken(LadderParser.INDIRECT, 0);
};

DevIndirectLocalContext.prototype.LOCAL_DEVICE = function() {
    return this.getToken(LadderParser.LOCAL_DEVICE, 0);
};

DevIndirectLocalContext.prototype.offset = function() {
    return this.getTypedRuleContext(OffsetContext,0);
};
DevIndirectLocalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitDevIndirectLocal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DevIndirectGlobalContext(parser, ctx) {
	DeviceContext.call(this, parser);
    this.dev = null; // Token;
    this.ofs = null; // OffsetContext;
    DeviceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DevIndirectGlobalContext.prototype = Object.create(DeviceContext.prototype);
DevIndirectGlobalContext.prototype.constructor = DevIndirectGlobalContext;

LadderParser.DevIndirectGlobalContext = DevIndirectGlobalContext;

DevIndirectGlobalContext.prototype.INDIRECT = function() {
    return this.getToken(LadderParser.INDIRECT, 0);
};

DevIndirectGlobalContext.prototype.GLOBAL_DEVICE = function() {
    return this.getToken(LadderParser.GLOBAL_DEVICE, 0);
};

DevIndirectGlobalContext.prototype.offset = function() {
    return this.getTypedRuleContext(OffsetContext,0);
};
DevIndirectGlobalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitDevIndirectGlobal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DevLocalContext(parser, ctx) {
	DeviceContext.call(this, parser);
    this.dev = null; // Token;
    this.ofs = null; // OffsetContext;
    DeviceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DevLocalContext.prototype = Object.create(DeviceContext.prototype);
DevLocalContext.prototype.constructor = DevLocalContext;

LadderParser.DevLocalContext = DevLocalContext;

DevLocalContext.prototype.LOCAL_DEVICE = function() {
    return this.getToken(LadderParser.LOCAL_DEVICE, 0);
};

DevLocalContext.prototype.offset = function() {
    return this.getTypedRuleContext(OffsetContext,0);
};
DevLocalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitDevLocal(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LadderParser.DeviceContext = DeviceContext;

LadderParser.prototype.device = function() {

    var localctx = new DeviceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LadderParser.RULE_device);
    var _la = 0; // Token type
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DevGobalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            localctx.dev = this.match(LadderParser.GLOBAL_DEVICE);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LadderParser.CORON) {
                this.state = 56;
                localctx.ofs = this.offset();
            }

            break;

        case 2:
            localctx = new DevLocalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            localctx.dev = this.match(LadderParser.LOCAL_DEVICE);
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LadderParser.CORON) {
                this.state = 60;
                localctx.ofs = this.offset();
            }

            break;

        case 3:
            localctx = new DevIndirectGlobalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 63;
            this.match(LadderParser.INDIRECT);
            this.state = 64;
            localctx.dev = this.match(LadderParser.GLOBAL_DEVICE);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LadderParser.CORON) {
                this.state = 65;
                localctx.ofs = this.offset();
            }

            break;

        case 4:
            localctx = new DevIndirectLocalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 68;
            this.match(LadderParser.INDIRECT);
            this.state = 69;
            localctx.dev = this.match(LadderParser.LOCAL_DEVICE);
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LadderParser.CORON) {
                this.state = 70;
                localctx.ofs = this.offset();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OffsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_offset;
    return this;
}

OffsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffsetContext.prototype.constructor = OffsetContext;


 
OffsetContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OffsetNumContext(parser, ctx) {
	OffsetContext.call(this, parser);
    this.num = null; // NumberContext;
    OffsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OffsetNumContext.prototype = Object.create(OffsetContext.prototype);
OffsetNumContext.prototype.constructor = OffsetNumContext;

LadderParser.OffsetNumContext = OffsetNumContext;

OffsetNumContext.prototype.CORON = function() {
    return this.getToken(LadderParser.CORON, 0);
};

OffsetNumContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
OffsetNumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOffsetNum(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OffsetDevContext(parser, ctx) {
	OffsetContext.call(this, parser);
    this.dev = null; // Token;
    OffsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OffsetDevContext.prototype = Object.create(OffsetContext.prototype);
OffsetDevContext.prototype.constructor = OffsetDevContext;

LadderParser.OffsetDevContext = OffsetDevContext;

OffsetDevContext.prototype.CORON = function() {
    return this.getToken(LadderParser.CORON, 0);
};

OffsetDevContext.prototype.GLOBAL_DEVICE = function() {
    return this.getToken(LadderParser.GLOBAL_DEVICE, 0);
};
OffsetDevContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitOffsetDev(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LadderParser.OffsetContext = OffsetContext;

LadderParser.prototype.offset = function() {

    var localctx = new OffsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LadderParser.RULE_offset);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            localctx = new OffsetNumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.match(LadderParser.CORON);
            this.state = 76;
            localctx.num = this.number();
            break;

        case 2:
            localctx = new OffsetDevContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.match(LadderParser.CORON);
            this.state = 78;
            localctx.dev = this.match(LadderParser.GLOBAL_DEVICE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumFloatContext(parser, ctx) {
	NumberContext.call(this, parser);
    this.num = null; // Token;
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumFloatContext.prototype = Object.create(NumberContext.prototype);
NumFloatContext.prototype.constructor = NumFloatContext;

LadderParser.NumFloatContext = NumFloatContext;

NumFloatContext.prototype.FLOAT = function() {
    return this.getToken(LadderParser.FLOAT, 0);
};
NumFloatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitNumFloat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumIntContext(parser, ctx) {
	NumberContext.call(this, parser);
    this.num = null; // Token;
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumIntContext.prototype = Object.create(NumberContext.prototype);
NumIntContext.prototype.constructor = NumIntContext;

LadderParser.NumIntContext = NumIntContext;

NumIntContext.prototype.INTEGER = function() {
    return this.getToken(LadderParser.INTEGER, 0);
};
NumIntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitNumInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumHexContext(parser, ctx) {
	NumberContext.call(this, parser);
    this.num = null; // Token;
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumHexContext.prototype = Object.create(NumberContext.prototype);
NumHexContext.prototype.constructor = NumHexContext;

LadderParser.NumHexContext = NumHexContext;

NumHexContext.prototype.HEXADECIMAL = function() {
    return this.getToken(LadderParser.HEXADECIMAL, 0);
};
NumHexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitNumHex(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LadderParser.NumberContext = NumberContext;

LadderParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LadderParser.RULE_number);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LadderParser.HEXADECIMAL:
            localctx = new NumHexContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            localctx.num = this.match(LadderParser.HEXADECIMAL);
            break;
        case LadderParser.FLOAT:
            localctx = new NumFloatContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            localctx.num = this.match(LadderParser.FLOAT);
            break;
        case LadderParser.INTEGER:
            localctx = new NumIntContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 83;
            localctx.num = this.match(LadderParser.INTEGER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_string;
    this.text = null; // CharsContext
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.QUOTE = function() {
    return this.getToken(LadderParser.QUOTE, 0);
};

StringContext.prototype.RQUOTE = function() {
    return this.getToken(LadderParser.RQUOTE, 0);
};

StringContext.prototype.chars = function() {
    return this.getTypedRuleContext(CharsContext,0);
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.StringContext = StringContext;

LadderParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LadderParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(LadderParser.QUOTE);
        this.state = 87;
        localctx.text = this.chars();
        this.state = 88;
        this.match(LadderParser.RQUOTE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CharsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_chars;
    this._DBLQUOTE = null; // Token
    this.ch = []; // of Tokens
    this._NOT_ESCCHAR = null; // Token
    this._tset258 = null; // Token
    return this;
}

CharsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharsContext.prototype.constructor = CharsContext;

CharsContext.prototype.DBLQUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LadderParser.DBLQUOTE);
    } else {
        return this.getToken(LadderParser.DBLQUOTE, i);
    }
};


CharsContext.prototype.NOT_ESCCHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LadderParser.NOT_ESCCHAR);
    } else {
        return this.getToken(LadderParser.NOT_ESCCHAR, i);
    }
};


CharsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitChars(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.CharsContext = CharsContext;

LadderParser.prototype.chars = function() {

    var localctx = new CharsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LadderParser.RULE_chars);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LadderParser.DBLQUOTE || _la===LadderParser.NOT_ESCCHAR) {
            this.state = 90;
            localctx._tset258 = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===LadderParser.DBLQUOTE || _la===LadderParser.NOT_ESCCHAR)) {
                localctx._tset258 = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            localctx.ch.push(localctx._tset258);
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EndlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_endl;
    return this;
}

EndlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndlContext.prototype.constructor = EndlContext;

EndlContext.prototype.EOF = function() {
    return this.getToken(LadderParser.EOF, 0);
};

EndlContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LadderParser.NEWLINE);
    } else {
        return this.getToken(LadderParser.NEWLINE, i);
    }
};


EndlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitEndl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.EndlContext = EndlContext;

LadderParser.prototype.endl = function() {

    var localctx = new EndlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LadderParser.RULE_endl);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LadderParser.EOF:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.match(LadderParser.EOF);
            break;
        case LadderParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 98; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 97;
            		this.match(LadderParser.NEWLINE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 100; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LadderParser.RULE_identifier;
    this.id = null; // Token
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(LadderParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LadderParserVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LadderParser.IdentifierContext = IdentifierContext;

LadderParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LadderParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        localctx.id = this.match(LadderParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LadderParser = LadderParser;
