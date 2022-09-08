const path = require('path')
const webpackCfg = require('../../../compatible/index');
const aliasFn = ({
    micro,
    absDir
}) => {
    const resolve = function (dir) {
        return path.join(absDir, dir)
    }
    let microName = "/" + micro
    const alias = {
        //报表
        ssoLibrary: resolve(`src${microName}`),
        ssoAssets: resolve(`src${microName}/assets`),
    }
    if (webpackCfg.isEmp == false) {
        alias["@ssoHost"]=resolve(`src${microName}`);
    }
    return alias;
};
exports.default = aliasFn;
module.exports = aliasFn;