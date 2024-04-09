const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max-min) + min);
}; // LOOK INTO

console.log(getRandomIntInRange(1,5));


const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.' ;
};

console.log(coolnessGauge(3))
console.log(coolnessGauge(4))


 
const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

funkoPopAddictionLevel(0)
funkoPopAddictionLevel(1)
funkoPopAddictionLevel(10)
funkoPopAddictionLevel(11)
funkoPopAddictionLevel(20)
funkoPopAddictionLevel(21)
funkoPopAddictionLevel(30)
funkoPopAddictionLevel(31)
funkoPopAddictionLevel(100)

const cold = "Wow, it's cold out.";
const dryHeat = "At least it's a dry heat.";
const hotGross = "It's hot and gross out.";
const notTooBad = "It's not too bad!";

const getWeatherReport = (temperature) => {
  let weatherReport;
  if (temperature > 90) {
    weatherReport = hotGross
  } else if (temperature > 70) {
    weatherReport = dryHeat
  } else if (temperature >= 32 && temperature <= 70) {
    weatherReport = notTooBad
  } else if (temperature < 32) {
    weatherReport = cold
  }
  console.log(weatherReport)
  console.log("And that's your report!");
  return weatherReport;
};

getWeatherReport(100)
getWeatherReport(90)
getWeatherReport(70)
getWeatherReport(80)
getWeatherReport(50)
getWeatherReport(32)
getWeatherReport(5)


const returnPositiveNegativeZero = (num) => {
  if (num < 0) {
    return 'Negative'
  } else if (num > 0) {
    return 'Positive'
  } else {
    return 'Zero';
  }
};

console.log(returnPositiveNegativeZero(0))
console.log(returnPositiveNegativeZero(1))
console.log(returnPositiveNegativeZero(2))
console.log(returnPositiveNegativeZero(-1))
console.log(returnPositiveNegativeZero(-2))
console.log(returnPositiveNegativeZero(5))


module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};