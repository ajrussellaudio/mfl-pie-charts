require([], () => {
  const data = getData(logData);
})

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