document.addEventListener("keypress", poop);

let ting = "AdminRed";
let indexa = 0;

var audio4 = new Audio('./audio/Klicc.mp3');
var audio3 = new Audio('./audio/Klicc.mp3');
var audio2 = new Audio('./audio/Klicc.mp3');
var audio1 = new Audio('./audio/Klicc.mp3');
var audio = new Audio('./audio/Klicc.mp3');

var audio5 = new Audio('./audio/Bop.wav');

let eO = 0;

function poop(e){

    if (e.code.toUpperCase() == "KEY" + ting[indexa].toUpperCase()) {
        indexa++;

        // if (eO >= 6) {
        //     eO=0;
        // }
        // eO++;

        // if(eO==1){audio.play();}
        // if(eO==2){audio1.play();}
        // if(eO==3){audio2.play();}
        // if(eO==4){audio3.play();}
        // if(eO==5){audio4.play();}


        if (indexa >= ting.length) {
            audio5.play();
            console.log("IN")
            indexa=0;
            setCookie("dataUsSM", "", 30);
            setCookie("dataUtI", "", 30);
            setCookie("dataUeAV", "", 30);
            document.getElementById("adm").innerHTML = "ADMIN"
        }
    }else{
        indexa = 0;
    }

}
