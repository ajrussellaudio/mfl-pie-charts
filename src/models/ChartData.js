define([], () => {
  return class ChartData {
    constructor(data) {
      this.label = data.label.toUpperCase();
      this.tablet = data.sources.tablet;
      this.smartphone = data.sources.smartphone;
    }

    total() {
      return this.tablet + this.smartphone;
    }
  }
})