//enter your date of  birth
var birthday = new Date("March 10 1998");

//main function + calculate age in milliseconds
const ageCalculator = (birthday) => {
  let age = new Date() - new Date(birthday).getTime();
  return msToHoursMinutesSeconds(age);
};

//add pad to the single number e.g. 2 into 02
function padTo2Digits(num) {
  return num.toString().padStart(2, 0);
}

//calculated hours, minutes and seconds
function msToHoursMinutesSeconds(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  //if you want hours in 24 then uncomment next line but then you have to calculate months and years also
  // hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
}

console.log("You have wasted:", ageCalculator(birthday), "hours of your life");
