
export default {
  basePath: 'https://hariprasadvi.github.io/MainProject',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
