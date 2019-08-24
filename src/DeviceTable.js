//////////////////
// Device Number
function parseWordDevNo(text) {
    return parseInt(text);
}

function parseRelayDevNo(text) {
    
    return parseInt(text);
}
  
//////////////////
// DeviceTable
exports.deviceTable = [
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
