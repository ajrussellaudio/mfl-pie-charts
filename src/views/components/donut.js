define([], () => {
  return (svg, radius, chartData) => {
    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 20);

    const pie = d3.pie()
      .sort(null)
      .value(d => { return d.value; });

    const pieGroup = svg.selectAll(".arc")
      .data(pie(chartData.data.reverse()))
      .enter()
      .append("g")
      .attr("class", "arc " + chartData.label.toLowerCase())

    pieGroup.append("path")
      .attr("d", arc)
      .attr("class", d => { return d.data.label });
  }
})
