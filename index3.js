const zodiac = document.getElementById("zodiac");       //ab zodiac.value krne par huemin zodiac ki value mil jayegi

const body = document.body;

//body.style.backgroundColor = "red";


const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
          body.style.backgroundColor = "#fc0303";
        break;
    
        case "tarus":
          body.style.backgroundColor = "#03fc6f";
        break;
    
        case "gemini":
          body.style.backgroundColor = "#fce514";
        break;

        case "cancer":
          body.style.backgroundColor = "#a427c1";
        break;

        case "leo":
          body.style.backgroundColor = "#fcba03";
        break;

        case "virgo":
          body.style.backgroundColor = "#40231b";
        break;

        case "scorpio":
          body.style.backgroundColor = "#9fd9fc";
        break;
        case "saggitarius":
          body.style.backgroundColor = "#ffeceb";
        break;
        case "capricorn":
          body.style.backgroundColor = "#eb8d57";
        break;
        case "aquarius":
          body.style.backgroundColor = "#579eeb";
        break;
        
        case "pisces":
          body.style.backgroundColor = "#fc88d8";
        break;
    default:
        body.style.backgroundColor = "#fff"
        break;
  }
}