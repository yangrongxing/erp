// import Vue from 'vue'
// import SvgIcon from 'commonComponents/SvgIcon'// svg component

// // register globally
// Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
