var versionstore = (function() {
	var exports = {};

    exports.storage = {
        set: window.localStorage.setItem,
        get: window.localStorage.getItem
    };

    exports.set = function set(name, data, version) {
    	exports.storage.set(name, JSON.stringify({
            value: data,
            version: version,
            creationTime: (new Date()).getTime()
        }));
    }

    exports.get = function get(name, version) {
    	var jsonData = exports.storage.get(name);
        if(jsonData != null) {
        	try {
        		var data = JSON.parse(jsonData);
        		if (data != null && data.version != null && data.version === version)
        			return data.value;
        	} catch (e) { }
        }
        return null;
    }

	return exports;

})();
