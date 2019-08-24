var parseDevice = require('./DeviceParser').parseDevice;
var deviceTable = require('./DeviceTable').deviceTable;

function DevicePool() {
	this.devPool = {};
	// デバイス種別ごとの入れ物を用意
	for(i = 0; i < deviceTable.length; i++) {
		this.devPool[deviceTable[i].devType] = {};
	}
	return this;
}

DevicePool.prototype.constructor = DevicePool;

function getDeviceDefinition(dev) {
	return deviceTable.find(function(v) {
		return v.devType === dev.devType;
	});
}

function isValidDevice(dev) {
	var def = getDeviceDefinition(dev);
	if (def) {
		if (def.min <= dev.devNo && dev.devNo <= def.max) {
			return true;
		}
	}
	return false;
}

DevicePool.prototype.write = function(dev, val) {
	// 引数チェック
	if (typeof dev === "string") {
		// 文字列の場合はパースする
		device = parseDevice(dev);
		if ("error" in device) {
			throw device;
		}
	} else if (typeof dev === "object") {
		if (!("devType" in dev) || !("devNo" in dev)) {
			throw {"error": "dev argument is invalid."};
		}
		if (!isValidDevice(dev)) {
			throw {"error": "Invalid device."};
		}
		if (!(typeof val === 'number') && !(typeof val === 'boolean')) {
			throw {"error": "Invalid value."};
		}
		device = dev;
	} else {
		throw {"error": "Type of dev argument is invalid."};
	}

	// デバイスプールに登録or上書き
	this.devPool[device.devType][device.devNo]=val;
	return true;
};

DevicePool.prototype.read = function(dev) {
	// 引数チェック
	if (typeof dev === "string") {
		// 文字列の場合はパースする
		device = parseDevice(dev);
		if ("error" in device) {
			throw device;
		}
	} else if (typeof dev === "object") {
		if (!("devType" in dev) || !("devNo" in dev)) {
			throw {"error": "Invalid argument."};
		}
		if (!isValidDevice(dev)) {
			throw {"error": "Invalid device."};
		}
		device = dev;
	} else {
		throw {"error": "Type of dev argument is invalid."};
	}
	// デバイスプールにすでに登録されていたら、その値を返す。
	if (device.devNo in this.devPool[device.devType]) {
		return this.devPool[device.devType][device.devNo];
	}

	// 未登録のデバイスは初期値を返す。
	if (dev.bitSize === 1) {
		return false;
	} else {
		return 0;
	}
};


exports.DevicePool = DevicePool;