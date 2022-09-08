/**
 * 添加自动初始化系统字段的勾子
 * 
 */

const getOneExpses = function (exposesUrl) {
    const exposesMap = _lz_global.autoHook("exposes");
    let fullExposesUrl = exposesUrl;
    if (!exposesUrl.startsWith("@")){
        funllExposesUrl = "@" + exposesUrl;
    }
    const route = exposesMap[fullExposesUrl.toUpperCase()];
    return route;
}

const syncLoadDll = function (exposesUrl) {
    const _getter = getOneExpses(exposesUrl);
    if (_getter == null) {
        console.log("--syncLoadDll--" + exposesUrl + "--不存在");
    }
    const dll = _getter;
    return dll;
}
const syncLoadDllDef = function (exposesUrl) {
    const _getter = getOneExpses(
        exposesUrl
    );
    if (_getter == null) {
        console.log("--syncLoadDllDef--" + exposesUrl + "--不存在");

    }
    const dll = _getter;
    // return dll.default;
    return dll;
}
const lazyLoadRoute = function (exposesUrl) {
    return () => {
        return new Promise((resolve, reject) => {
            const _getter = getOneExpses(
                exposesUrl
            );
            if (_getter == null) {
                console.log("--lazyLoadRoute--" + exposesUrl + "--不存在")
            }
            const viewIns = _getter;
            resolve(viewIns.default)
        })
    };
}
const register = function (exposes) {
    const exposesMap = _lz_global.getHook("exposes");
    if (exposes != null) {
        for (const key in exposes) {
            let fullKey = key;
            if (!key.startsWith("@")) {
                fullKey = "@" + key;
            }
            const upperKey = fullKey.toUpperCase();
            if (Object.hasOwnProperty.call(exposes, key)) {
                const element = exposes[key];
                exposesMap[upperKey] = element;
            }
        }
    }
}
const fns = {
    /**
   * @param {*} param0 
   * @returns 
   */
  register,
  syncLoadDll,
  syncLoadDllDef,
  lazyLoadRoute 
}

if (!window.syncLoadDll) {
    window.syncLoadDll = fns.syncLoadDll;
    window.syncLoadDllDef = fns.syncLoadDllDef;
    window.lazyLoadRoute = fns.lazyLoadRoute;
}
export default fns;