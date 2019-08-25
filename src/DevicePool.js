var parseDevice = require('./DeviceParser').parseDevice;
var deviceTable = require('./DeviceTable').deviceTable;

function DevicePool() {
	this.devPool = {};
	// デバイス種別ごとの入れ物を用意
	for (d of deviceTable) {
		var bytes = (d.max - d.min + 1) * d.bitSize / 8;
		var buffer = new ArrayBuffer(bytes);
		var view = new DataView(buffer);
		this.devPool[d.devType] = {
			"view": view,
			"def": d
		};
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

function validateDevice(dev) {
	if (typeof dev === "string") {
		// 文字列の場合はパースする
		return parseDevice(dev);
	} else if (typeof dev === "object") {
		if (!("devType" in dev) || !("devNo" in dev)) {
			return {"error": "dev argument is invalid."};
		}
		if (!isValidDevice(dev)) {
			return {"error": "Invalid device."};
		}
		return dev;
	} else {
		return {"error": "Type of dev argument is invalid."};
	}
}


DevicePool.prototype.writeBit = function(dev, val) {
	// ### mada ワードのビット扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}
	if (!(typeof val === 'boolean')) {
		throw new Error("Invalid value.");
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo / 16;
	var mask = 0x0001 << (device.devNo % 16);
	var ch = v.getUint16(offset, true);
	ch = val ? ch | mask : ch & ~mask;
	v.setUint16(offset, ch, true);
	
	return true;
};


DevicePool.prototype.readBit = function(dev, val) {
	// ### mada ワードのビット扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}

	// デバイスプールに登録or上書き
	var v = this.devPool[device.devType].view;
	var offset = device.devNo / 16;
	var mask = 0x0001 << (device.devNo % 16);
	return v.getUint16(offset, true) & mask ? true : false;
};


DevicePool.prototype.writeWord = function(dev, val) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw {"error": device.error};
	}
	if (!(typeof val === 'number')) {
		throw new Error("Invalid value.");
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	v.setUint16(offset, val, true);
	return true;
};


DevicePool.prototype.writeSWord = function(dev, val) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw {"error": device.error};
	}
	if (!(typeof val === 'number')) {
		throw new Error("Invalid value.");
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	v.setInt16(offset, val, true);
	return true;
};


DevicePool.prototype.writeDWord = function(dev, val) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw {"error": device.error};
	}
	if (!(typeof val === 'number')) {
		throw new Error("Invalid value.");
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	if (this.devPool[device.devType].view.byteLength <= offset + 4) {
		throw new Error("Device number is out of range:"+dev);
	}
	v.setUint32(offset, val, true);
	return true;
};


DevicePool.prototype.writeSFloat = function(dev, val) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw {"error": device.error};
	}
	if (!(typeof val === 'number')) {
		throw new Error("Invalid value.");
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	if (this.devPool[device.devType].view.byteLength <= offset + 4) {
		throw new Error("Out of range:"+dev);
	}
	v.setFloat32(offset, val, true);
	return true;
};


DevicePool.prototype.readWord = function(dev) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	return v.getUint16(offset, true);
};


DevicePool.prototype.readSWord = function(dev) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = dev.devNo * this.devPool[device.devType].def.bitSize / 8;
	return v.getInt16(offset, true);
};


DevicePool.prototype.readDWord = function(dev) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	if (this.devPool[device.devType].view.byteLength <= offset + 4) {
		throw new Error("Out of range:"+dev);
	}
	return v.getUint32(offset, true);
};


DevicePool.prototype.readSFloat = function(dev) {
	// ### mada ビットのワード扱い
	// 引数チェック
	var device = validateDevice(dev);
	if ("error" in device) {
		throw new Error(device.error);
	}

	// デバイスプールに書き込み
	var v = this.devPool[device.devType].view;
	var offset = device.devNo * this.devPool[device.devType].def.bitSize / 8;
	if (this.devPool[device.devType].view.byteLength <= offset + 4) {
		throw new Error("Out of range:"+dev);
	}
	return v.getFloat32(offset, true);
};



exports.DevicePool = DevicePool;