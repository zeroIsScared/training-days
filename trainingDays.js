// The scope of `random` is too loose 


const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
 
// The scope of `days` is too tight 
const getTrainingDays = event => {
 let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
 
  return days;
};
 
// The scope of `name` is too tight 

const logEvent = (name, event) => {
  
  console.log(`${name}'s event is: ${event}`);
};
 
const logTime = (name, days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};
 
const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
 
 
logEvent(name, event);
logTime(name, days);


// The scope of `random` is too loose 
// The scope of `days` is too tight 
const getTrainingDays2 = event2 => {
 let days2;
  if (event2 === 'Marathon') {
    days2 = 50;
  } else if (event2 === 'Triathlon') {
    days2 = 100;
  } else if (event2 === 'Pentathlon') {
    days2 = 200;
  }
 
  return days2;
};
 
// The scope of `name` is too tight 

const logEvent2 = (name2, event2) => {
  
  console.log(`${name2}'s event is: ${event2}`);
};
 
const logTime2 = (name2, days2) => {
  
  console.log(`${name2}'s time to train is: ${days2} days`);
};

const event2 = getRandEvent();
const days2= getTrainingDays2(event2);
const name2 = 'Warren';

logEvent2(name2, event2);
logTime2(name2, days2);