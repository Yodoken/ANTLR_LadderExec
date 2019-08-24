parser grammar LadderParser;
options { tokenVocab=LadderLexer; }

// Entry
mnemonicList
    : endl* mnm+=mnemonic*
    ;

// Mnemonic
mnemonic
    : inst=INSTRUCTION sfx=SUFFIX? op+=operand* endl
    ;

operand
    : op=number                 #opNumber
    | op=string                 #opString
    | op=device                 #opDev
    | op=unknown                #opUnknown
    | op=identifier             #opIdentifier
    ;

// Unknown
unknown: UNKNOWN;

// Device
device
    : dev=GLOBAL_DEVICE ofs=offset?                     #devGobal
    | dev=LOCAL_DEVICE ofs=offset?                      #devLocal
    | INDIRECT dev=GLOBAL_DEVICE ofs=offset?            #devIndirectGlobal
    | INDIRECT dev=LOCAL_DEVICE ofs=offset?             #devIndirectLocal
    ;

offset
    : CORON num=number                                  #offsetNum
    | CORON dev=GLOBAL_DEVICE                           #offsetDev
    ;

// Literal
number
    : num=HEXADECIMAL               #numHex
    | num=FLOAT                     #numFloat
    | num=INTEGER                   #numInt
    ;

string
    : QUOTE text=chars RQUOTE
    ;

chars
    : ch+=(DBLQUOTE | NOT_ESCCHAR)*
    ;

endl: EOF | NEWLINE+;

// Identifier
identifier
    : id=IDENTIFIER
    ;
