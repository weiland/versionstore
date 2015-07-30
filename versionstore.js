var versionstore = (function() {

    var storage = {
        set: window.localStorage.setItem,
        get: window.localStorage.getItem
    };

    function set(name, data, version) {
        storage.set(name, JSON.stringify({
            value: data,
            version: version,
            creationTime: (new Date()).getTime()
        }));
    }

    function get(name, version) {
        var jsonData = storage.get(name);
        if(jsonData != null) {
            var data = JSON.parse(data);
            if(data != null && data. version != null && data.version === version)
                return data.value;
        }
        return null;
    }

    return {
        storage: storage,
        set: set,
        get: get
    }

})();
