define(['../src/models/ChartData'], (ChartData) => {
  const chartData = new ChartData({
    label: "Test",
    symbol: "€",
    sources: {
      tablet: "120000",
      smartphone: "80000"
    }
  });

  it("can return tablet()", () => {
    expect(chartData.tabletAsString()).toEqual("120.000€");
  });

  it("can return smartphone()", () => {
    expect(chartData.smartphoneAsString()).toEqual("80.000€");
  });

  it("should have a label", () => {
    expect(chartData.label).toEqual("Test");
  });

  it("should have a total from all sources", () => {
    expect(chartData.totalAsString()).toEqual("200.000");
  });

  it("should have a tablet percentage", () => {
    expect(chartData.tabletPercentage()).toEqual("60%")
  });

  it("should have a smartphone percentage", () => {
    expect(chartData.smartphonePercentage()).toEqual("40%")
  });
})