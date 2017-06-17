define([
  '../helpers/separateThousands',
  '../helpers/currency'
], (separateThousands, currency) => {
  return (svg, chartData) => {
    const label = svg.append("text")
      .text(chartData.formattedLabel())
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .attr("class", "center title");

    const total = svg.append("text")
      .text(prettyNumber(chartData))
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .attr("class", "center total");
  }

  function prettyNumber(chartData) {
    if (chartData.formattedLabel() === "REVENUE") {
      return currency(chartData.total(), '€');
    }
    return separateThousands(chartData.total());
  }
})