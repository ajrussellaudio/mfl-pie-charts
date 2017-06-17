define(['../src/models/ChartData'], (ChartData) => {
  const chartData = new ChartData({
    label: "Test",
    sources: {
      tablet: 120,
      smartphone: 80
    }
  });

  it("should have a label all in caps", () => {
    expect(chartData.label).toEqual("TEST");
  });

  it("should have a total from all sources", () => {
    expect(chartData.total()).toEqual(200);
  });

  it("should have a tablet percentage", () => {
    expect(chartData.tabletPercentage()).toEqual("60%")
  });

  it("should have a smartphone percentage", () => {
    expect(chartData.smartphonePercentage()).toEqual("40%")
  });
})