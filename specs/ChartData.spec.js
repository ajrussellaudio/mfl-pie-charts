define(['../src/models/ChartData'], (ChartData) => {
  const chartData = new ChartData({
    label: "Test",
    sources: {
      tablet: 120000,
      smartphone: 80000
    }
  });

  it("can return tablet()", () => {
    expect(chartData.tablet()).toEqual(120000);
  });

  it("can return smartphone()", () => {
    expect(chartData.smartphone()).toEqual(80000);
  });

  it("should have a label all in caps", () => {
    expect(chartData.formattedLabel()).toEqual("TEST");
  });

  it("should have a total from all sources", () => {
    expect(chartData.total()).toEqual(200000);
  });

  it("should have a tablet percentage", () => {
    expect(chartData.tabletPercentage()).toEqual(60)
  });

  it("should have a smartphone percentage", () => {
    expect(chartData.smartphonePercentage()).toEqual(40)
  });
})