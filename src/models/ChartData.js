define([], () => {
  return class ChartData {

    constructor(data) {
      this.locale = "es-ES";
      this.label = data.label;
      this.tablet = parseInt(data.sources.tablet);
      this.smartphone = parseInt(data.sources.smartphone);
      this.symbol = (data.symbol || "");
    }

    tabletAsString() {
      return this.tablet.toLocaleString(this.locale) + this.symbol;
    }

    tabletPercentage() {
      return this.percentageOfTotal(this.tablet);
    }

    smartphoneAsString() {
      return this.smartphone.toLocaleString(this.locale) + this.symbol;
    }

    smartphonePercentage() {
      return this.percentageOfTotal(this.smartphone);
    }

    total() {
      return this.tablet + this.smartphone;
    }

    totalAsString() {
      return this.total().toLocaleString(this.locale) + this.symbol;
    }

    percentageOfTotal(source) {
      return ((source / this.total()) * 100) + "%"
    }

    extractData(sources) {
      return Object.keys(sources).map(key => {
        return {
          label: key,
          value: sources[key]
        }
      })
    }

  }
})