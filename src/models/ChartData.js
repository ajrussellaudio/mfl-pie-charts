define([], () => {
  return class ChartData {
    constructor(options) {
      this.label = options['label'].toUpperCase();
    }
  }
})