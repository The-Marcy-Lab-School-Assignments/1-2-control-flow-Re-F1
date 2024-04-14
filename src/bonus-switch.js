const measureRainSwitch = (rainIndex) => {
  let rainAmount
    switch(rainIndex) {
      
      case 0:
        rainAmount = 'drought'
        console.log(rainAmount)
        break;
      case 1:
        rainAmount = 'dry'
        console.log(rainAmount)
        break;
      case 2:
        rainAmount = 'average'
        console.log(rainAmount)
        break;
      case 3:
        rainAmount = 'average'
        console.log(rainAmount)
        break;
      case 4:
        rainAmount = 'rainy'
        console.log(rainAmount)
        break;
      case 5:
        rainAmount = 'rainy'
        console.log(rainAmount)
        break;
      case 6:
        rainAmount = 'flood'
        console.log(rainAmount)
        break;
      case 7:
        rainAmount = 'flood'
        console.log(rainAmount)
        break;
      case 8:
        rainAmount = 'flood'
        console.log(rainAmount)
        break;
    }
    log.push(message);
};
measureRainSwitch(0);
expect(log).toHaveBeenNthCalledWith(1, 'drought');

const rounderSwitch = (roundUpOrDown) => {
  let roundedNumber
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
