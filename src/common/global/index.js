
(function () {
   if (window._lz_global == null) {
    window._lz_global = {};
    const _lz_hsList = [];
    window._lz_global.hook = function (hookname, obj) {
        if (window._lz_global.hsHook(hookname)) {} else {
            _lz_hsList.push(hookname);
            window._lz_global[hookname] = obj;
        }
    }
    window._lz_global.autoHook = function (hookname) {
        if (window._lz_global.hsHook(hookname)) {
            return window._lz_global.getHook(hookname);
        } else {
            window._lz_global.hook(hookname, {});
            return window._lz_global.getHook(hookname);
        }
    }

    window._lz_global.hsHook = function (hookname) {
        return _lz_hsList.indexOf(hookname) >= 0;
    }
    window._lz_global.getHook = function (hookname) {
        return window._lz_global[hookname];
    }
   }
})();
require('./init.js')