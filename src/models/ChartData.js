define([], () => {
  return class ChartData {

    constructor(data) {
      this.label = data.label;
      this.data = this.extractData(data.sources)
    }

    formattedLabel() {
      return this.label.toUpperCase();
    }

    tablet() {
      return this.data.find(datum => {
        return datum.label === "tablet"
      }).value;
    }

    tabletPercentage() {
      return this.percentageOfTotal(this.tablet());
    }

    smartphone() {
      return this.data.find(datum => {
        return datum.label === "smartphone"
      }).value;
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