define([], () => {
  return (chartData) => {
    const data = [chartData.smartphone, chartData.tablet];

    const width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal()
      .range(["#FF0000", "#00FF00"]);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 20);

    const pie = d3.pie()
      .sort(null)
      .value(d => { return d; });

    const svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const g = svg.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", d => { return color(d.data); });
  };
});