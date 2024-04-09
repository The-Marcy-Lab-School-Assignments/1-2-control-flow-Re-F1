const wildlyBiasedReview = (location) => {
if (typeof location !== 'string') {
  console.log("Please enter valid location")
  return;
  }

if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  return; 
}

  return console.log('Yea that place is cool I guess');
};

wildlyBiasedReview('NYC')
wildlyBiasedReview(100);


module.exports = {
  wildlyBiasedReview,
};




