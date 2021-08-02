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

var faunadb = window.faunadb
var q = faunadb.query

var serverClient = new faunadb.Client({
secret: 'fnAEKuqzuwACBcehmLnXpljSzUgdvfbS9e_MwlTv',
})

let submitBtn = document.getElementById("SbmBtn");
submitBtn.addEventListener("mousedown", SBmaX);

let TextArea = document.getElementById("tIUT");
let EmailArea = document.getElementById("tIUTe");
let CheckBox = document.getElementById("cIkb");
let wrongEmail = document.getElementById("FalseEmail");

function setDf() {
    let aaaaa = (getCookie("User")!="") ? getCookie("User").replaceAll("<", "") + " 2021" : "Du 2021";
    let area = document.getElementById("userTiS");
    area.innerHTML = '<p class="Center">Thank you for your response!<br /><br />Your text:<br />"' + getCookie("dataUtI") + '"</p><p class="Center">« ' + aaaaa + " »</p>";
}
if (getCookie("dataUsSM") == "true") {
    setDf();
}

//setCookie("dataUsSM", "", 30)
function SBmaX() {//random namn så ingen vet i konsolen
    if (TextArea.value.length <= 1) {
        
        document.getElementById("FalseText").innerHTML = "Please write something :'(";

    }

    else if (EmailArea.value.includes("@") && EmailArea.value.includes(".") && !EmailArea.value.includes(" ")) {
        
        if (getCookie("dataUsSM") == "") {
            setCookie("dataUsSM", "true", 30);
            setCookie("dataUtI", TextArea.value.replaceAll("<", ""), 30);

            setCookie("dataUeAV", EmailArea.value.replaceAll("<", ""), 30);


            setDf();
    
    
            serverClient.query(
                q.Create(
                    q.Collection('Comments'),
                    {
                        data:
                        {
                            Text: TextArea.value,
                            Email: EmailArea.value,
                            Show: CheckBox.checked
                        } 
                    },
                ),
            )
        }
    }else if (EmailArea.value.length == 0) {
        wrongEmail.innerHTML = "Please enter an email!";
    }else{
        wrongEmail.innerHTML = "Email does not exist!";
    }
}

