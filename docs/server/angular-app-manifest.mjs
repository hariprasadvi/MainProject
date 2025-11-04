
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
    'index.csr.html': {size: 91996, hash: '0b3cd11b59d1c8c57a5474c271c41b7f3b23bcf024b92e2b468aca1bd10c9507', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38282, hash: 'f44a9fe533d74e85d667b178172901451d017341e0ade942883b3e2d79777634', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'attendance/index.html': {size: 160757, hash: '55462a05993ac71ad93ce7a31cbbff8d822bfc301a75fb43b80cf96d9d989e4c', text: () => import('./assets-chunks/attendance_index_html.mjs').then(m => m.default)},
    'meeting-minutes/index.html': {size: 211978, hash: '6141f85bd0233c4c677ad7501792520966e81690225c0e9463cc58e252617516', text: () => import('./assets-chunks/meeting-minutes_index_html.mjs').then(m => m.default)},
    'meetings/index.html': {size: 199394, hash: '49f832b2c491d88d0d384a7151569a67f3d93731b36b1335fec77ac0d7a25fa4', text: () => import('./assets-chunks/meetings_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 171740, hash: '0ca426b1a4f6a2bddf17ff5c2331a0829a75d1db26cb65b2946328411921e94c', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'loans/index.html': {size: 214732, hash: 'faa305c112ea08271b5632761ff5c0d0292a965f4f30901c0b37b3d038ecf333', text: () => import('./assets-chunks/loans_index_html.mjs').then(m => m.default)},
    'styles-HQECS6ST.css': {size: 97014, hash: 'ED6nmX5QSUY', text: () => import('./assets-chunks/styles-HQECS6ST_css.mjs').then(m => m.default)}
  },
};
