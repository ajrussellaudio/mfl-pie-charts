define([], () => {

  return (container, chartData) => {

    const infoBox = document.createElement("div");
    infoBox.className = "info-box " + chartData.label.toLowerCase();
    container.appendChild(infoBox);

    createDiv(infoBox, {
      label: "Tablet",
      percentage: chartData.tabletPercentage(),
      actual: chartData.tabletAsString()
    });

    createDiv(infoBox, {
      label: "Smartphone",
      percentage: chartData.smartphonePercentage(),
      actual: chartData.smartphoneAsString()
    });
  }

  function createDiv(parent, data) {
    const h1 = document.createElement("h1");
    h1.innerText = data.label;

    const percentage = document.createElement("span");
    percentage.className = "percentage";
    percentage.innerText = data.percentage;

    const actual = document.createElement("span");
    actual.className = "actual"
    actual.innerText = data.actual;

    const pTag = document.createElement("p");
    pTag.appendChild(percentage);
    pTag.appendChild(actual);

    const div = document.createElement("div")
    div.className = data.label.toLowerCase();
    div.appendChild(h1);
    div.appendChild(pTag);

    parent.appendChild(div);
  }


})