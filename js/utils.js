export function test (object, path) {
    try {
        console.log(JSON.stringify(object.prop_access(path)));
    } catch(e) {
        if(e instanceof UndefinedPropertyError) {
            console.log("Exception caught");
        }
    }
}

function UndefinedPropertyError(path, property, object) {
    var instance = new Error(`Property '${property}' not exist for path '${path}', expected one of : ` + JSON.stringify(object));
    Object.setPrototypeOf(
        instance, Object.getPrototypeOf(this)
    );
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, UndefinedPropertyError);
    }
    return instance;
}

Object.prototype.prop_access = function(path) {
    if(!path) return this;
    const pathArray = path.split(".");
    let object = this;
    for (let i = 0; i< pathArray.length; i++) {
        let newObject = object[pathArray[i]];
        if (newObject === undefined) {
            throw new UndefinedPropertyError(
                pathArray.slice(0, i+1).join('.'),
                pathArray[i],
                Object.keys(object)
            );
        }
        object = newObject;
    }

    return object;
};

function type_check_v1(data, type) {
    switch (typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch (type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return data !== null && !Array.isArray(data);
            }
    }
    return false;
}

function type_check_v2(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!type_check_v1(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                let valid = false;
                for (let value of conf[key]) {
                    valid = type_check_v2(data, {value});
                    if (valid) break;
                }
                if (!valid) return false;
        }
    }
    return true;
}

export function type_check(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
            case 'value':
            case 'enum':
                let newConf = {};
                newConf[key] = conf[key];
                if (!type_check_v2(data, newConf)) return false;
                break;
            case 'properties':
                for (let prop of Object.keys(conf[key])) {
                    if (data[prop] === undefined) return false;
                    if (!type_check(data[prop], conf[key][prop])) return false;
                }
                break;
        }
    }
    return true;
}