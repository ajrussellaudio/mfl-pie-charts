define([
  '../src/views/helpers/separateThousands',
  '../src/views/helpers/currency'
], (separateThousands, currency) => {

  describe("separateThousands", () => {
    it("should add thousands separators to numbers", () => {
      expect(separateThousands(1000000)).toEqual("1.000.000");
    });

    it("should add EUR symbol", () => {
      expect(currency(1000000, '€')).toMatch('1.000.000€');
    })
  })

})