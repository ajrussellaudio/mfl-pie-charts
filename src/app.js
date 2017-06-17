require(['./models/ChartData'], (ChartData) => {
  return getData(buildCharts);

  function logData(data) {
    console.log(data);
  }

  function getData(callback) {
    fetch('_fake-server/data.json')
      .then(response => {
        return response.json();
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
    objects.forEach(object => {
      buildHTML(object);
    })
  }

  function buildHTML(object) {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const header = document.createElement("h1");
    header.innerText = object.formattedLabel();

    const pTag = document.createElement("p");
    pTag.innerText = "Total: " + object.formattedTotal();

    wrapper.appendChild(header);
    wrapper.appendChild(pTag);
    document.body.appendChild(wrapper);
  }

})



