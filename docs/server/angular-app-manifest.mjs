
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
      "chunk-LL4JR47P.js",
      "chunk-Z4M44437.js",
      "chunk-F2FOF2MT.js",
      "chunk-HKPTJMZX.js"
    ],
    "route": "/MainProject/attendance"
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
    "route": "/MainProject/meeting-minutes"
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
    "route": "/MainProject/loans"
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
    "route": "/MainProject/meetings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3UTGYILY.js",
      "chunk-HKPTJMZX.js"
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
    'index.csr.html': {size: 91957, hash: 'ba6dfb149e6dfe2591a323ba1bcd969a1e7511f5a70409a131411b2fc92c8dfd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38180, hash: '86f80b2d50f7fe848f59d15e1f8ad1880ae5733d3051bbae04aba147faa5ee40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'attendance/index.html': {size: 142340, hash: 'cb73eb75ab3c789c05215bdc64a2267809fd522e65456788a68b6fddd87e2591', text: () => import('./assets-chunks/attendance_index_html.mjs').then(m => m.default)},
    'meeting-minutes/index.html': {size: 197886, hash: '8611bbba9e6b1a664ca17df6e8f7f0d4146a66f7829de37fd806786dd57404ca', text: () => import('./assets-chunks/meeting-minutes_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 145060, hash: 'dd6b0d7aa3f69a058440ccae24e380bdc9eb0900237d2a8c5a78d4d9abbce45b', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'meetings/index.html': {size: 182050, hash: '77d054db7ed1d425eb719147eb523f0a7e4ef556dce3f6a59304411cafc83c10', text: () => import('./assets-chunks/meetings_index_html.mjs').then(m => m.default)},
    'loans/index.html': {size: 182403, hash: 'c9b618f4e8676afc31f7e2c855d35a708396ab354dc1f1cdac5571d924916d61', text: () => import('./assets-chunks/loans_index_html.mjs').then(m => m.default)},
    'styles-CGRJKM7M.css': {size: 97077, hash: 'lttVK+0fI8s', text: () => import('./assets-chunks/styles-CGRJKM7M_css.mjs').then(m => m.default)}
  },
};
