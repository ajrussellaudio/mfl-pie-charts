define([
  './separateThousands'
], (separateThousands) => {

  return (number, symbol) => {
    return separateThousands(number) + symbol;
  };

})