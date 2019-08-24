var deviceTable = require('./DeviceTable').deviceTable;


module.exports.parseDevice = function parseDevice(token) {
    if (typeof token != 'string') {
        return null;
    }
    token = token.toLowerCase();
    var devDef = deviceTable.find(function (v) {
        return 0 === token.indexOf(v.prefix.toLowerCase())
    });
    if (devDef) {
        var devNoToken = token.substr(devDef.prefix.length);
        devNo = devDef.parser(devNoToken);
        if (devNo != NaN) {
            if (devDef.min <= devNo && devNo <= devDef.max) {
                return {
                    "devType": devDef.devType,
                    "devNo": devNo
                };
            }
        }
        return {
            "error": "Invalid device number."    
        };
    } else {
        return {
            "error": "Unknown device type."
        };
    }
}
