let index = 0;
let KeepScroll = false
let ImageClicks = 0;
let EasterEggsFound = 0;

let clicked = false
function scrollBtm() {

    if (clicked == false) {
        EasterEggsFound++;
        clicked = true;
    }

    KeepScroll = true
    let bgsy = scrollY
    var intv = setInterval(() => {
        if (KeepScroll == true) {
            index+=1;
            window.scrollTo(0, index+bgsy+1);
        }else{
            clearInterval(intv);
        }

    }, 10);
}
function Reload() {
    window.scrollTo(0, 0);
    index=0;
    KeepScroll = false;
}function ImageClick() {
    ImageClicks++;
    if (ImageClicks==15) {
        EasterEggsFound++;
        document.getElementById("ImageClick").style.filter = "invert()";
    }
}function CloseBox(id) {
    console.log(id)
    // id.parentNode.Remove();
}
let CCls = 0;
function Cls() {
    CCls++;
    if (CCls >= 3) {
        EasterEggsFound++;
    }
}
