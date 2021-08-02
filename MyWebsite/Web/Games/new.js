/*####  IMPORTS  ####*/ 

/*####  VARIABLES  ####*/ 

let title = document.getElementById("title");
let titleLogo = document.getElementById("titleLogo");

let Gurkan = document.getElementById("Gurka");
let Fire = document.getElementById("Fire");

let GurkaScoreLabel = document.getElementById("GurkaScoreLabel");


let GurkSpin = 0.1;
let CurrentSpin = 0;

/*####  EVENT LISTENERS  ####*/ 

document.addEventListener("scroll", scrollFunc);

/*####  FUNCTIONS  ####*/ 

function scrollFunc() {
    title.style.fontSize = 10 - scrollY / 30 + "vmin"
    titleLogo.style.height = 7 - scrollY / 40 + "vmin"
}
function Gurka(){
    GurkSpin += (0.3 + GurkSpin / 100 * 7.5)/3
}

/*####   LOOOOOOPS   ####*/

function st() {
    setInterval(() => {
        Gurkan.style.transform = "translateX(-50%) rotate(" + CurrentSpin/10 + "deg)";
        CurrentSpin += GurkSpin;
        GurkaScoreLabel.innerHTML = parseInt((CurrentSpin / 100)/30)
        GurkSpin = GurkSpin*0.999
        if (parseInt(CurrentSpin / 100) >= 100000) {
            Fire.style.animation = "Rotate 2s linear infinite, FadeIn 5s ease-in-out forwards";
        }
    }, 10);
}



/*####   COOKIES    ####*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }