
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://hariprasadvi.github.io/MainProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MainProject/attendance",
    "route": "/MainProject"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QNSJW32P.js",
      "chunk-TW3OOXOV.js",
      "chunk-CQIZBEXG.js",
      "chunk-OZIAXCCM.js"
    ],
    "route": "/MainProject/attendance"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z2P2YCFN.js",
      "chunk-TW3OOXOV.js",
      "chunk-VQG7Z22H.js",
      "chunk-CQIZBEXG.js",
      "chunk-OZIAXCCM.js"
    ],
    "route": "/MainProject/meeting-minutes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EVIFGTNS.js",
      "chunk-C6MGBF6P.js",
      "chunk-VQG7Z22H.js",
      "chunk-CQIZBEXG.js",
      "chunk-OZIAXCCM.js"
    ],
    "route": "/MainProject/loans"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJWVY5O3.js",
      "chunk-C6MGBF6P.js",
      "chunk-VQG7Z22H.js",
      "chunk-CQIZBEXG.js",
      "chunk-OZIAXCCM.js"
    ],
    "route": "/MainProject/meetings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HFPKUM4P.js",
      "chunk-OZIAXCCM.js"
    ],
    "route": "/MainProject/reports"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MainProject/attendance",
    "route": "/MainProject/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 92026, hash: '0488b7481eb3355d1353ce8b8f7f4e9b993ee72d3aab8a467efd8c5cc4ef41df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38312, hash: '893cf91c6d471766210246e2ba57b45f64289bd831a053ec407d0a576f704e34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'attendance/index.html': {size: 160787, hash: '2b4bf4d6e78e45c2a85dea128bc1c722945891e83b7972acf73c110486032203', text: () => import('./assets-chunks/attendance_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 171770, hash: 'b28f4f2e8d1480eaffdb36c6c05b195ea06355a001a872b983f7b062cc0c5f56', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'meeting-minutes/index.html': {size: 212008, hash: '49e9dee017683b74ef0d56b3483a5b4ff0db6be809383ade0e9a98781aee7b13', text: () => import('./assets-chunks/meeting-minutes_index_html.mjs').then(m => m.default)},
    'loans/index.html': {size: 214762, hash: '15edeca56c44a04c963741b63e77e856ece8cb28549e1fbdb04e05aa907247f8', text: () => import('./assets-chunks/loans_index_html.mjs').then(m => m.default)},
    'meetings/index.html': {size: 199424, hash: '19b1ad8370b1c9b20bd02fa6fd293d0a635a5ef53e778a5c650787a5e16d517e', text: () => import('./assets-chunks/meetings_index_html.mjs').then(m => m.default)},
    'styles-HQECS6ST.css': {size: 97014, hash: 'ED6nmX5QSUY', text: () => import('./assets-chunks/styles-HQECS6ST_css.mjs').then(m => m.default)}
  },
};
