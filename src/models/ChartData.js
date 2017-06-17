define([], () => {
  return class ChartData {

    constructor(data) {
      this.label = data.label;
      this.sources = data.sources
    }

    formattedLabel() {
      return this.label.toUpperCase();
    }

    tablet() {
      return this.sources.tablet
    }

    tabletPercentage() {
      return this.percentageOfTotal(this.tablet());
    }

    smartphone() {
      return this.sources.smartphone
    }

    smartphonePercentage() {
      return this.percentageOfTotal(this.smartphone());
    }

    total() {
      return this.tablet() + this.smartphone();
    }

    percentageOfTotal(source) {
      return (source / this.total()) * 100;
    }

  }
})