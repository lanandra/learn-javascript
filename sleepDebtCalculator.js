//get sleep hours
const getSleepHours = day => {
  if (day === 'Monday') {
    return 7;
  }
  else if (day === 'Tuesday') {
    return 8;
  }
  else if (day === 'Wednesday') {
    return 7;
  }
  else if (day === 'Thursday') {
    return 7;
  }
  else if (day === 'Friday') {
    return 9;
  }
  else if (day === 'Saturday') {
    return 8;
  }
  else if (day === 'Sunday') {
    return 8;
  }
};

//print sleep hours
console.log(getSleepHours('Monday'));
console.log(getSleepHours('Tuesday'));
console.log(getSleepHours('Wednesday'));
console.log(getSleepHours('Thursday'));
console.log(getSleepHours('Friday'));
console.log(getSleepHours('Saturday'));
console.log(getSleepHours('Sunday'));

//get sum of actual sleep hours
const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday')
;

//define ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7
}

//print sum of actual sleep hours and ideal sleep hours
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

//calculate sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('You have got Perfect amount of sleep');
} 
else if (actualSleepHours > idealSleepHours) {
  console.log('You slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) more this week. You have got more sleep than needed');
} 
else if (actualSleepHours < idealSleepHours) {
  console.log('You slept ' + (idealSleepHours - actualSleepHours) + ' hour(s) less this week. You should have some rest');
}
};

calculateSleepDebt();
