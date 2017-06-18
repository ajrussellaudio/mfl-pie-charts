define([], () => {

  return (svg, radius) => {
    const tickAngles = [0, 90, 180, 270];
    radius = radius - 20;

    const ticks = svg.append("g")
      .attr("class", "ticks");

    ticks.selectAll("line")
      .data(tickAngles)
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("y1", -radius + 2)
      .attr("x2", 0)
      .attr("y2", -radius + 5)
      .attr("class", "tick")
      .attr("transform", d => {
        return "rotate(" + d + ")";
      });

  }

})