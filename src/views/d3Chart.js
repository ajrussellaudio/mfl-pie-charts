define([
    "views/components/donut",
    "views/components/ticks",
    "views/components/label",
    "views/components/full-info"
  ], (donut, ticks, label, fullInfo) => {
  return (chartData, container) => {
    const width = 200, height = 200,
      radius = Math.min(width, height) / 2;

    const svg = d3.select(container).append("div")
      .attr("class", "chart")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")")

    donut(svg, radius, chartData);
    ticks(svg, radius);
    label(svg, chartData);
    fullInfo(container, chartData, width, height - width);
  }
});