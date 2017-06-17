define([], () => {
  return (chartData) => {

    const width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 20);

    const pie = d3.pie()
      .sort(null)
      .value(d => { return d.value; });

    const svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const g = svg.selectAll(".arc")
      .data(pie(chartData.data.reverse()))
      .enter()
      .append("g")
      .attr("class", "arc " + chartData.label.toLowerCase())

    g.append("path")
      .attr("d", arc)
      .attr("class", d => { return d.data.label });
  };
});