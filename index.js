// let someValue = 199;
function scuberGreetingForFeet(someValue) {
  if(someValue <= 400){
      return 'This one is on me!'
  } else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

// function ternaryCheckCity(cityName){
//   // Write your code here!
//   return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.')
// }

//NOTES using arrow function in place of traditional function dec.
const ternaryCheckCity = (cityName) => {
  return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tipLevel){
  // Write your code here!
  switch (tipLevel) {
    case 'generous':
      return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
    default: return 'Bye.'    
    break;
  }
}

//generous Thank you very much.
//not so generous Thank you.
//anything else Bye.