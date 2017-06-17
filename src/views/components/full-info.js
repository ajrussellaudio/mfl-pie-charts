define([
  '../helpers/separateThousands',
  '../helpers/currency'
], (separateThousands, currency) => {

  return (container, chartData) => {

    const h1Tablet = document.createElement("h1");
    h1Tablet.innerText = "Tablet";

    const h1Smartphone = document.createElement("h1");
    h1Smartphone.innerText = "Smartphone";

    createDiv(container, {
      label: "Tablet",
      percentage: chartData.tabletPercentage(),
      actual: chartData.tablet()
    });

    createDiv(container, {
      label: "Smartphone",
      percentage: chartData.smartphonePercentage(),
      actual: chartData.smartphone()
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
    div.className = "table";
    div.appendChild(h1);
    div.appendChild(pTag);

    parent.appendChild(div);
  }


})