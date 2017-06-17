define([], () => {
  return class ChartData {

    constructor(data) {
      this.label = data.label;
      this.tablet = data.sources.tablet;
      this.smartphone = data.sources.smartphone;
    }

    formattedLabel() {
      return this.label.toUpperCase();
    }

    total() {
      return this.tablet + this.smartphone;
    }

    tabletPercentage() {
      return this.percentageOfTotal(this.tablet);
    }

    smartphonePercentage() {
      return this.percentageOfTotal(this.smartphone);
    }

    percentageOfTotal(source) {
      return ((source / this.total()) * 100).toString() + "%";
    }

  }
})