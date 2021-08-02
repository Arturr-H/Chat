let InfoLabel = document.getElementById("InfoLabel");

let SecondsPassed = 0;

let PreviousScroll = 0;
let TotalScoll = 0;
let TotalClicks = 0;
document.addEventListener("scroll", scroll);
document.addEventListener("mousedown", function(){
    TotalClicks += 1;
    set();
})
function scroll(){
    TotalScoll += parseInt((scrollY-PreviousScroll)/1000);
    set();
}

setInterval(() => {
    SecondsPassed+=1;
    set();
}, 1000);


function set() {
    InfoLabel.innerHTML = "Seconds spent on this page: " + parseInt(SecondsPassed) + "<br />Pixels you've scrolled on this page: " + TotalScoll + "<br />Times clicked on this page: " + TotalClicks + "<br />Your browser: " + getBrowser() + "<br />Oparative system: " + navigator.platform + "<br />Cookies enabled: " + navigator.cookieEnabled + "<br />Easter eggs found: " + EasterEggsFound + "/4";
}

function getBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
   {
       return('Opera');
   }
   else if(navigator.userAgent.indexOf("Chrome") != -1 )
   {
    return('Chrome');
   }
   else if(navigator.userAgent.indexOf("Safari") != -1)
   {
    return('Safari');
   }
   else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
   {
    return('Firefox');
   }
   else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
   {
    return('IE'); 
   }  
   else 
   {
    return('unknown');
   }
}

