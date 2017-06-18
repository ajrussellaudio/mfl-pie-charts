# Revenue / Impresions / Visits

[See this code in action](https://ajrussellaudio.github.io/mfl-pie-charts/)

[It even passes some tests!](https://ajrussellaudio.github.io/mfl-pie-charts/test/SpecRunner.html)

## To run this locally:

`git clone` the repo and `cd` into its folder.

This app does not contact any external server, but uses `fetch` to grab local JSON data. Therefore it needs to be run from an HTTP server to avoid CORS errors; opening `index.html` will not work. If Python is installed, a simple server can be run on port 3000 from the console with:

```bash
python -m SimpleHTTPServer 3000
```

This project has no dependencies. Local versions of [RequireJS](http://requirejs.org/) and [D3.js](https://d3js.org/) can be found in `/vendor`.

Unit tests run with [Jasmine](https://jasmine.github.io/). The test output HTML is found at `/test/SpecRunner.html`.