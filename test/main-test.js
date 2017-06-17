require.config({
  baseUrl: '../specs',
  paths: {
    'jasmine': ['../test/lib/jasmine'],
    'jasmine-html': ['../test/lib/jasmine-html'],
    'jasmine-boot': ['../test/lib/boot'],
  },
  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], () => {
  // require specs here
})