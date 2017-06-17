require([
    './models/ChartData',
    './views/d3Chart'
  ], (ChartData, renderD3chart) => {
  return getData(buildCharts);

  function logData(data) {
    console.log(data);
  }

  function getData(callback) {
    fetch('_fake-server/data.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(json => {
        callback(json);
      });
  }

  function buildCharts(chartsJson) {
    const chartsData = chartsJson.data.map(chartJson => {
      return new ChartData(chartJson);
    });
    render(chartsData);
  }

  function render(objects) {
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    objects.forEach(object => {
      buildHTML(object);
    })
  }

  function buildHTML(object) {
    renderD3chart(object, colors(object));
  }

  function colors(object) {
    const colorPairs = {
      revenue: ["#0c6502", "#52d123"],
      impresions: ["#034f63", "#2bc5e2"],
      visits: ["#d95807", "#fbc110"]
    }
    return colorPairs[object.label.toLowerCase()]
  }

})



