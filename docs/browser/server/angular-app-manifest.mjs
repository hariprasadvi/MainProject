
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/attendance",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LL4JR47P.js",
      "chunk-Z4M44437.js",
      "chunk-F2FOF2MT.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/attendance"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K5XSRZQ3.js",
      "chunk-Z4M44437.js",
      "chunk-56BXLZX6.js",
      "chunk-F2FOF2MT.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/meeting-minutes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OCO4INJ.js",
      "chunk-7GVBZT6E.js",
      "chunk-56BXLZX6.js",
      "chunk-F2FOF2MT.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/loans"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TMOSKGOE.js",
      "chunk-7GVBZT6E.js",
      "chunk-56BXLZX6.js",
      "chunk-F2FOF2MT.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/meetings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3UTGYILY.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/reports"
  },
  {
    "renderMode": 2,
    "redirectTo": "/attendance",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 91946, hash: '947bc5d1b89356fe7c62c7d7b8914ef653e63f3a3fe49a830dc7bdbbdcea7961', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38169, hash: '2e0b08d69d35a4a6f6dba330bfcbc35c567c239520aa4fb29c5455d112d9db0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'meeting-minutes/index.html': {size: 197875, hash: '0c471ec469f98487dd130aab65d743e1cc7a04872322cca9882beccd67bad86b', text: () => import('./assets-chunks/meeting-minutes_index_html.mjs').then(m => m.default)},
    'attendance/index.html': {size: 142329, hash: '97692dae9d9dad740b4add1d891de24bdb41d8c80ab6b188852269c8cac416c5', text: () => import('./assets-chunks/attendance_index_html.mjs').then(m => m.default)},
    'meetings/index.html': {size: 182039, hash: 'd345d4cc5b58634f4bf52ddfb448dfcfb25f014a70c63017596754f17bbc9f5f', text: () => import('./assets-chunks/meetings_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 145049, hash: '8760f17bd286a12884934b4af79f5fa000535b00f57dbbc9f7f8f8dd15529f79', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'loans/index.html': {size: 182392, hash: '5b76a8df90fda49fa2102326be06300bc51e0e34a84824fdf3472ae0fd3901b6', text: () => import('./assets-chunks/loans_index_html.mjs').then(m => m.default)},
    'styles-CGRJKM7M.css': {size: 97077, hash: 'lttVK+0fI8s', text: () => import('./assets-chunks/styles-CGRJKM7M_css.mjs').then(m => m.default)}
  },
};
