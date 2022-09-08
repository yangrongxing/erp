import Vue from "vue"
import Element from "element-ui"




// import 'commonLibrary/global'
import '../global'


// import MicroHost from 'commonHelper/microHost'
import MicroHost from '../helper/microHost'
import "@ssoHost/exposesProxy/host";
const App = syncLoadDllDef("@ssoHost/App")
