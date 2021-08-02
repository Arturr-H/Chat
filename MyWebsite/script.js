function init() {
    let ScrollerWarn = document.getElementById("ScrollWarning")

    let Scroller = document.getElementById("Scroller")
    setInterval(() => {
        if (Scroller.offsetWidth <= 650) {
            ScrollerWarn.innerHTML = "^ Scroll to view all images ^";
        }else{
            ScrollerWarn.innerHTML = "";
        }
    }, 200);
    
    let FlipPhoneLabel = document.getElementById("FlipPhone")
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        FlipPhoneLabel.innerHTML = "Flip your phone horizontally for a better experience"
    }        
}init();

let ImagesSelected = []


function ImageAdd(img) {


    if (!ImagesSelected.includes(img)) {
        ImagesSelected.push(img);
        document.getElementById(img).innerHTML = "<span class='AddDeleteButton'>+</span>"

    }else{
        ImagesSelected = ImagesSelected.filter(e => e !== img);
        document.getElementById(img).innerHTML = "+"
    }
    document.getElementById("imgresult").innerHTML = ImagesSelected
    console.log(ImagesSelected)
}

let time = document.getElementById("time");

let dt = new Date();

let WeekDays = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

time.innerHTML = WeekDays[dt.getDay()] + " the " + dt.getDate() + " of " + Month[dt.getMonth()]