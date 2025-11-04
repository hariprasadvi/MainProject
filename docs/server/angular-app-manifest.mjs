
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MainProject/',
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
      "chunk-X2SX3IOT.js",
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
      "chunk-CEU7WXXP.js",
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
    'index.csr.html': {size: 91996, hash: '9daa4c21c658e918f3dd62fa611e19e9daf39f06819293067da7031d88d7117d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38282, hash: 'df53977ab0361884da5a14ab6bed16d4d1c4f5e1f230ff49f2373a9b33fb68d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'attendance/index.html': {size: 160757, hash: '4f7312a7540e7c1eaf02efa7f0a0d87d0e67b919c01e9d631654cd084901d2d0', text: () => import('./assets-chunks/attendance_index_html.mjs').then(m => m.default)},
    'meeting-minutes/index.html': {size: 211978, hash: '734a9a1e837f19f9085c80c38b7d9432d14704d05b45f72fb87c28714fcf698f', text: () => import('./assets-chunks/meeting-minutes_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 171740, hash: '2e7a946081e6d427bca7e63bef5eb41754fed32c0515f7e0099486fd29d623ef', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'meetings/index.html': {size: 199394, hash: 'fa31343aaadc05765fd2644cb33da6d18ef7de783c1b588b82d3eb7987314446', text: () => import('./assets-chunks/meetings_index_html.mjs').then(m => m.default)},
    'loans/index.html': {size: 214732, hash: '46687408a6845c38c6ebfbe22fdd9a24931c956a5eff92a7a4084a9af141d779', text: () => import('./assets-chunks/loans_index_html.mjs').then(m => m.default)},
    'styles-HQECS6ST.css': {size: 97014, hash: 'ED6nmX5QSUY', text: () => import('./assets-chunks/styles-HQECS6ST_css.mjs').then(m => m.default)}
  },
};
