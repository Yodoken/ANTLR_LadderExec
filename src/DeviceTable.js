//////////////////
// Parser - Device Number 
function parseWordDevNo(text) {
    // とりあえず"ddddd"形式のみ対応(10進数)。
    return parseInt(text);
}

function parseRelayDevNo(text) {
    // とりあえず"cccbb"形式のみ対応。cはチャンネル(10進数)。bはビット番号(10進数)。
    text = '00'+text;
    bits = parseInt(text.substr(text.length - 2));
    ch = parseInt(text.substr(0, text.length - 2));
    return ch * 16 + bits;
}
  
//////////////////
// DeviceTable
deviceTable = [
    {
        "prefix": "dm",
        "devType": 0,
        "parser": parseWordDevNo,
        "bitSize": 16,
        "min": 0,
        "max": 65534
    },
    {
        "prefix": "r",
        "devType": 1,
        "parser": parseRelayDevNo,
        "bitSize": 1,
        "min": 0,
        "max": 15999
    },
    {
        "prefix": "z",
        "devType": 2,
        "parser": parseWordDevNo,
        "bitSize": 32,
        "min": 1,
        "max": 12
    }
];

exports.deviceTable = deviceTable;


exports.getDevType = function(prefix) {
    pre = prefix.toLowerCase();
    var dev = deviceTable.find(function(v) {
        return v.prefix.toLowerCase() === pre;
    });
    if (dev) {
        return dev.devType;
    } else {
        return undefined;
    }
}