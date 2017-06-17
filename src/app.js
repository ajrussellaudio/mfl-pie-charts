require([
    './models/ChartData',
    './views/d3Chart'
  ], (ChartData, renderD3chart) => {
  return getData(buildCharts);

  function getData(callback) {
    fetch('fake-server/data.json')
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
      buildHTML(object, container);
    })
  }

  function buildHTML(object, container) {
    const div = document.createElement("div");
    div.className = "svg-container";
    container.appendChild(div);
    renderD3chart(object, div);
  }

})



