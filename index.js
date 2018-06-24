function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    if (string.toUpperCase() === string) 
    return("YES INDEED!");
<<<<<<< HEAD
  
  else if (string.toLowerCase() === string) 
    return("I can't hear you!");
  
  else {
    return("I love you, too.");
  }
=======
  }
  else if (string.toLowerCase() === string) 
    return("YES INDEED!");
else {
    return("I love you, too.");
>>>>>>> 660ab3c645d832e046d2052a080807c602e30c25
  }