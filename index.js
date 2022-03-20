//Racing arrangement algorithm

//Math.floor returns a number without a decimal point that is less or equal to a certain result of calculation
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if(runnerAge > 18 && registeredEarly){
    //If age of runners is more than 18 add 1000 to their raceNumber
  raceNumber += 1000
  console.log(raceNumber)
}

if (runnerAge > 18 && registeredEarly){
  console.log("Your racing time is 9:30am")
}else if (runnerAge > 18 && !registeredEarly){
  console.log(`Your racing time is 11:00am ${raceNumber}`)
}else if(runnerAge < 18){
  console.log(`Your racing time is 12:30pm with race number - ${raceNumber}`)
}else {
  console.log(`Please go to the registration desk`);
}