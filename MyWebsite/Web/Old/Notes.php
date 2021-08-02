<!DOCTYPE html>
<html>

<head>

    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23e4e4ff%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2267%22>📬</text></svg>" />
    <link rel="stylesheet" href="Chat11.css">
    <title>‹‹ Notes ››</title>

</head>
<script>

window.onload = init;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function init(){
  setCookie("Testt", [["1hej1", "1hej2", "1hej3"],["2hej1", "2hej2", "2hej3"],["3hej1", "3hej2", "3hej3"]], 30);
  console.log(getCookie("Testt"));
  console.log(["hej", "hejigkah", "faihuowfoawf "])
    // if (document.get,ElementById("BOX") != null) {
    //   console.log("BOX EXIST");
    //   document.getElementById("BOX").remove();
    // }
    //setCookie("Note", [], 30);
    if (getCookie("Note") == "") {
        setCookie("Note", [], 30);
    }else{
        getCookie("Note").slice(0, -1).split("_").forEach(element => {
          DisplayTextbox(element.split("-")[0], element.split("-")[1], element.split("-")[2], element.split("-")[3]);
        });
    }
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
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
function DisplayTextbox(Rn, val, xp, yp) {

    var box = document.createElement('div2');
    box.className = "Window-wrapper";
    let BoxStyle = "cursor: move; left: " + xp + "; top: " + yp + ";";
    box.setAttribute("style", BoxStyle);
    box.setAttribute("id", "BOX" + Rn);

    var c1 = document.createElement("div");
    c1.setAttribute("class", "Window-selector");
    c1.setAttribute("style", "background: rgb(237, 106, 94);");
    c1.setAttribute("onclick", "RemoveTextbox('" + Rn + "')")

    var ch1 = document.createElement("h6");
    ch1.setAttribute("style", "font-size: 15px; transform: rotate(45deg); margin-bottom: 49.4px; left: 3.1px; cursor:pointer;");
    ch1.setAttribute("onclick", "RemoveTextbox('" + Rn + "')")
    c1.appendChild(ch1);

    var c2 = document.createElement("div");
    c2.setAttribute("class", "Window-selector");
    c2.setAttribute("style", "background: rgb(245, 189, 79); margin-left:31px;");
    var ch2 = document.createElement("h6");
    c2.appendChild(ch2);

    var c3 = document.createElement("div");
    c3.setAttribute("class", "Window-selector");
    c3.setAttribute("style", "background: rgb(98, 195, 84); margin-left:51.5px;");
    var ch3 = document.createElement("h6");
    ch3.setAttribute("style", "transform: rotate(-45deg); font-size: 12px; margin-bottom: 50.7px; left: 4.2px;");
    c3.appendChild(ch3);

    var he2 = document.createElement("h2");
    he2.setAttribute("style", "position: absolute; bottom: 115px; left:245px; color:white; font-size: 20px; cursor: pointer; color: rgb(180, 180, 180);");
    aafafafa = "SaveText('" + Rn + "')";
    he2.setAttribute("onclick", aafafafa);
    he2.textContent = "Save";
    box.appendChild(he2);

    var txta = document.createElement("textarea");
    txta.setAttribute("placeholder", "Skriv noteringar här...");
    txta.setAttribute("spellcheck", "false");
    txta.setAttribute("type", "text");
    txta.setAttribute("class", "Window-textbox");
    txta.setAttribute("id", "SAVE" + Rn);
    if(val != ""){
        txta.value = val;
    }else{
        txta.value = "";
    }

    box.appendChild(txta);
    box.appendChild(c1);
    box.appendChild(c2);
    box.appendChild(c3);

    document.body.appendChild(box);
    
    var m = document.getElementById('BOX' + Rn);
    m.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseUp() {
        window.removeEventListener('mousemove', move, true);
    }

    function mouseDown(e) {
        window.addEventListener('mousemove', move, true);
    }
    let SnapDistX = 1;
    let SnapDistY = 1;
    function move(e) {
        m.style.top = Math.ceil((e.clientY - 20) / SnapDistY) * SnapDistY + 'px';
        m.style.left = Math.ceil((e.clientX - 150) / SnapDistX) * SnapDistX + 'px';
    };

}
function CreateTextbox() {
    let Rn = randomInteger(1, 100000);//få ett ranodm ID för texboxen
    DisplayTextbox(Rn, "", "0px", "80px");//visa textboxen
    let CurrentNote = "DIV" + Rn + "--0px-80px_";//separera alla saker med - så man kan använda split("-") för att göra till en lista.
    let Note = getCookie("Note");
    Note += CurrentNote;
    setCookie("Note", Note, 30);
    location.reload();

}
function SaveText(Rn) {
    console.log("SAVING...");
    let CurrentBox = document.getElementById("BOX" + Rn);
    let Value = document.getElementById("SAVE" + Rn).value.replace(/(\r\n|\n|\r)/gm, "<br>");
    let x = CurrentBox.style.left;
    let y = CurrentBox.style.top;
    

    let a = getCookie("Note").split("_"); // returnar en lista som tex: ["Div172685-none-51px-145px", "Div172685-none-51px-145px"]
    console.log(a);
    let index = -1;
    let resultIndex = 0;
    let current;
    a.forEach(element => {
      index++;
      if(element.split("-")[0] == Rn) {
        console.log("INDEX INDK");
        let current = a[index].split("-");
        current[1] = Value;//current[1] är liskom vlauet av den cookien eller vad texten innehåller
        current[2] = x;//du fattar 2 = xposiiotnen
        current[3] = y;//du fattar
        current = current.join("-");


        resultIndex = index;
        a[resultIndex] = current;


        setCookie("Note", a.join("_"), 30);
        console.log(getCookie("Note"));
      }
    });
}
function RemoveTextbox(Rn) {

    console.log("BEFORE: " + getCookie("Note"));
    let a = getCookie("Note").split("_"); // returnar en lista som tex: ["Div172685-none-51px-145px", "Div172685-none-51px-145px"]
    let index = -1;
    let resultIndex = 0;
    let current;
    a.forEach(element => {
      index++;
      if(element.split("-")[0] == Rn) {

        let current = "";

        resultIndex = index;
        a[resultIndex][0] = current;

        setCookie("Note", a.join("_").slice(0, -1), 30);
        console.log(a[resultIndex])
        document.getElementById("BOX" + Rn).remove();
      }
    });
    console.log("AFTER:  " + getCookie("Note"));
}


</script>


<body onload="init()">

<div class="navigation-bar" id="navbg">
<button class="navigation-button" onclick="CreateTextbox()" id="CreateTextrutaBtn">New</button>


</body>
</html>     
