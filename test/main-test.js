require.config({
  baseUrl: '../specs',
  paths: {
    'jasmine': ['../test/lib/jasmine-2.6.3/jasmine'],
    'jasmine-html': ['../test/lib/jasmine-2.6.3/jasmine-html'],
    'jasmine-boot': ['../test/lib/jasmine-2.6.3/boot'],
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
  require(['test.spec'], window.onload)
})