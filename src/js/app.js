import $ from 'dom7';
import Framework7, { getDevice } from './framework7-custom.js';

// Import F7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes and Store
import routes from './routes.js';
import store from './store.js';

// Import main app component
import App from '../app.f7';

const device = getDevice();

const appConfig = {
  name: 'testApp',
  theme: 'auto',
  el: '#app',
  component: App,
  id: 'io.framework7.myapp',
  store,
  routes,
  serviceWorker: process.env.NODE_ENV === 'production'
    ? { path: '/service-worker.js' }
    : {},
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init() {
      if (this.device.cordova) {
        cordovaApp.init(this);
      }
    },
  },
};

const app = new Framework7(appConfig);
