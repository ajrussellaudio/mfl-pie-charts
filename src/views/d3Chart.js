define([
    "views/components/donut",
    "views/components/label",
    "views/components/full-info"
  ], (donut, label, fullInfo) => {
  return (chartData) => {
    const width = 300, height = 500,
      radius = Math.min(width, height) / 2;

    const svg = d3.select(".container").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")")

    donut(svg, radius, chartData);
    label(svg, chartData);
    fullInfo(svg, chartData);
  }
});