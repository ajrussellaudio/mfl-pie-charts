define([], () => {
  return (svg, chartData) => {
    const label = svg.append("text")
      .text(chartData.label.toUpperCase())
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .attr("class", "center title");

    const total = svg.append("text")
      .text(chartData.totalAsString())
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .attr("class", "center total");
  }
})