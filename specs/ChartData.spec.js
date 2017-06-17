define(['../src/models/ChartData'], (ChartData) => {
  const chartData = null;

  beforeEach(() => {
    chartData = new ChartData({
      label: "Test",
      sources: {
        tablet: 120,
        smartphone: 80
      }
    })
  });

  it("should have a label all in caps");

  it("should have a total from all sources");

  it("should have a tablet percentage");

  it("should have a smartphone percentage");
})