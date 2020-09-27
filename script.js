//Link to codepen: https://codepen.io/avixph/pen/OJNqqZx?editors=0011
{
  const favMovie = prompt("So, what's your favaorite movie?");
  switch (favMovie) {
    case "jaws":
      console.log("You're gonna need a bigger boat.");
      break;
    case "the shining":
      console.log("All work and no play makes Jack a dull boy.");
      break;
    case "star wars":
      console.log("Do. Or do not. There is no try.");
      break;
    case "forrest gump":
      console.log("Life was like a box of chocolates.");
      break;
    case "back to the future":
      console.log("Where we're going, we don't need roads.");
      break;
    default:
      console.log(`Ooh ${favMovie}, that's a great movie choice!`);
  }
}
