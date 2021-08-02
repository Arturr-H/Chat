let TimesSwitched = 0;


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
if (getCookie("NightMode") == "") {
    setCookie("NightMode", false);
}
function ToggleNM(){
    TimesSwitched++;
    let a = document.getElementById("NightModeBtn")
    if (getCookie("NightMode") == "false") {
        setCookie("NightMode", true)
        a.style.background = "rgb(236, 68, 68)"
    }else{
        setCookie("NightMode", false)
        a.style.background = "rgb(236, 48, 48)"

    }
    SetNm()
}
const a = document.getElementsByTagName("a")

let done = false;

function SetNm() {
    let root = document.documentElement;
    if (TimesSwitched >= 100) {
        if (done==false) {
            EasterEggsFound++;
            done=true;
        }
        root.style.setProperty("--BG", "rgb(237, 223, 24)");

        root.style.setProperty("--Btext", "black");
        root.style.setProperty("--DarkBg", "yellow");
        root.style.setProperty("--Text", "black");
        document.body.style.background = "rgb(237, 223, 24)"

        for (element of a) {
            element.style.color = "blue";
            element.style.textDecoration = "underline 0.05vmax";
        }
    }
    else if (getCookie("NightMode") == "false") {
        root.style.setProperty("--BG", "white");

        root.style.setProperty("--Btext", "rgb(255, 255, 255)");
        root.style.setProperty("--DarkBg", "rgb(0, 0, 0)");
        root.style.setProperty("--Text", "rgb(120, 120, 120)");
        root.style.setProperty("--Red", "rgb(236, 48, 48)");
        root.style.setProperty("--BW", "black");

        document.body.style.background = "white"
        for (element of a) {
            element.style.color = "blue";
            element.style.textDecoration = "underline 0.05vmax";
        }
        
    }else{
        root.style.setProperty("--BG", "rgb(25, 25, 25)");

        root.style.setProperty("--Btext", "rgb(0, 0, 0)");
        root.style.setProperty("--DarkBg", "rgb(236, 48, 48)");//afhwafbahwfbjahfjahwbfjh
        root.style.setProperty("--Text", "white");
        root.style.setProperty("--Red", "rgb(25, 25, 25)");
        root.style.setProperty("--BW", "white");

        document.body.style.background = "rgb(25, 25, 25)"
        for (element of a) {
            element.style.color = "white";
            element.style.textDecoration = "underline 0.05vmax";
          }
    }

}

SetNm()