<!DOCTYPE html>
<html>

<head>

    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23e4e4ff%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2267%22>📬</text></svg>" />
    <link rel="stylesheet" href="Chat11.css">
    <title>‹‹ Chat lounge ››</title>

</head>
<script>

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function scrollBottom() {window.scrollTo(0, 99999);}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);
window.onload = init; 
var loadFile = function(event){

    setCookie("Background", URL.createObjectURL(event.target.files[0]));
    console.log(document.cookie)
    document.getElementById("Background").src = URL.createObjectURL(event.target.files[0]);

    var elements = document.getElementsByTagName('DIV');
    var len = elements.length;
    for(var i = 0; i < len; ++i) {
        elements[i].style.boxShadow = 'none';
    }
    document.getElementById("textbox").style.boxShadow = "none";
    document.getElementById("SendBtn").style.boxShadow = "none";
    document.getElementById("UploadImg").style.boxShadow = "none";

};
function reload() {
    setCookie("BgColor", "none", 30);
    location.reload();
}
function rainbw() {
    setCookie("BgColor", "Rainbow", 30);
    TheColor = "Rainbow 1s linear infinite";
    document.body.style.animation = TheColor;
    document.getElementById("textbox").style.boxShadow = "none";
    document.getElementById("SendBtn").style.boxShadow = "none";
    document.getElementById("SendBtn").style.opacity = "0.9";
    document.getElementById("navbg").style.animation = TheColor;
    document.getElementById("navbg").style.filter = "brightness(80%)";
    document.getElementById("textbox").style.animation = TheColor;
    document.getElementById("textbox").style.filter = "brightness(80%)";
    document.getElementById("SendBtn").style.animation = TheColor;
    document.getElementById("SendBtn").style.filter = "brightness(70%)";

    document.getElementById("Home").style.animation = TheColor;
    document.getElementById("Help").style.animation = TheColor;
    document.getElementById("Rules").style.animation = TheColor;
    document.getElementById("SendBtn").style.animation = TheColor;

    document.getElementById("SendBtn").style.filter = "brightness(80%)";
    document.getElementById("Backgrounds").style.animation = TheColor;
    document.getElementById("Hamb").style.textShadow = "0px -6.6px 0px black";
    document.getElementById("Hamb").style.color = "black";
}
function background(color) {
    if (getCookie("BgColor") == "Rainbow") {
        setCookie("BgColor", color, 30);
        location.reload();
    }
    setCookie("BgColor", color, 30);
    ColorAll(getCookie("BgColor"));
}
function ColorAll(TheColor) {
    document.body.style.backgroundColor = TheColor;
    var elements = document.getElementsByTagName('DIV');
    var len = elements.length;
    for(var i = 0; i < len; ++i) {
        elements[i].style.boxShadow = 'none';
    }
    document.getElementById("textbox").style.boxShadow = "none";
    document.getElementById("SendBtn").style.boxShadow = "none";
    document.getElementById("SendBtn").style.opacity = "0.9";
    document.getElementById("navbg").style.background = TheColor;
    document.getElementById("navbg").style.filter = "brightness(80%)";
    document.getElementById("textbox").style.background = TheColor;
    document.getElementById("textbox").style.filter = "brightness(80%)";
    document.getElementById("SendBtn").style.background = TheColor;
    document.getElementById("SendBtn").style.filter = "brightness(70%)";

    document.getElementById("Home").style.background = TheColor;
    document.getElementById("Help").style.background = TheColor;
    document.getElementById("Rules").style.background = TheColor;
    document.getElementById("SendBtn").style.background = TheColor;

    document.getElementById("SendBtn").style.filter = "brightness(80%)";
    document.getElementById("Backgrounds").style.background = TheColor;
    document.getElementById("Hamb").style.textShadow = "0px -6.6px 0px black";
    document.getElementById("Hamb").style.color = TheColor;
    if (TheColor == "rgb(20, 20, 20)"){
        document.getElementById("Home").style.color = "white";
        document.getElementById("Help").style.color = "white";
        document.getElementById("Rules").style.color = "white";
        document.getElementById("Backgrounds").style.color = "white";
        document.getElementById("textbox").style.color = "white";
        document.getElementById("Hamb").style.textShadow = "0px -6.6px 0px white";

    }else{
        document.getElementById("Home").style.color = "black";
        document.getElementById("Help").style.color = "black";
        document.getElementById("Rules").style.color = "black";
        document.getElementById("Backgrounds").style.color = "black";
        document.getElementById("textbox").style.color = "black";
        document.getElementById("Hamb").style.textShadow = "0px -6.6px 0px black";

    } 
}
function init(){
    
    if (getCookie("TxtBoxes") == "") {
        setCookie("TxtBoxes", [], 30);
        setCookie("TxtBoxesValues", [], 30);
    }

    var TxtAr = JSON.parse("[" + JSON.stringify(getCookie("TxtBoxes").substring(1).split(',')) + "]");
    var ValAr = JSON.parse("[" + JSON.stringify(getCookie("TxtBoxesValues").substring(1).split(',')) + "]");

    console.log(TxtAr);
    console.log(ValAr);

    for (let index = 0; index < TxtAr[0].length; index++) {
        DisplayTextbox(TxtAr[0][index], ValAr[0][index]);
    }

    if (getCookie("BgColor") != "none") {
        ColorAll(getCookie('BgColor'));
    }if (getCookie("BgColor") == "Rainbow") {
        rainbw();
    }   
    var input = document.getElementById('textbox');
    input.focus();
    input.select();
    document.getElementById('Loader').style.animation = 'FadeOut .2s linear forwards';
    document.getElementById('LoaderText').remove();
    setTimeout(() => {
        document.getElementById('Loader').remove();
    }, 200);
    setTimeout(() => {
        var player = document.getElementById("musik");
        player.addEventListener("play", function () {
            document.body.style.transition = "all 2s";
            document.body.style.backgroundColor = "rgb(27, 27, 27)";
            document.getElementById("Disco-ball").style.transition = "all 2s";
            document.getElementById("Disco-gradient").style.transition = "all 2s";
            document.getElementById("Disco-ball").style.bottom = "75%";
            document.getElementById("Disco-gradient").style.bottom = "75%";
            setTimeout(() => {
                document.body.style.backgroundColor = "white";
                document.getElementById("Disco-ball").style.bottom = "100%";
                document.getElementById("Disco-gradient").style.bottom = "100%";
            }, player.duration * 1000);
        });        
    }, 1000);
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function SaveText(DivType) {
    let aaaa = document.getElementById("SaveText" + DivType).value;
    console.log(aaaa);

    var TxtAr = JSON.parse("[" + JSON.stringify(getCookie("TxtBoxes").substring(1).split(',')) + "]");
    var ValAr = JSON.parse("[" + JSON.stringify(getCookie("TxtBoxesValues").substring(1).split(',')) + "]");

    nm = TxtAr[0].indexOf(DivType);

    console.log("VAL DOWN");
    console.log(ValAr);

    ValAr[0][nm] = aaaa;

    console.log("VAL UP");
    console.log(ValAr);


    setCookie("TxtBoxesValues", ValAr, 30);

}
function DisplayTextbox(Rn, val) {

    var box = document.createElement('div');
    box.className = "Window-wrapper";
    box.setAttribute("id", "BOX" + Rn);
    
    var c1 = document.createElement("div");
    c1.setAttribute("class", "Window-selector");
    c1.setAttribute("style", "background: rgb(237, 106, 94);");
    var ch1 = document.createElement("h6");
    ch1.setAttribute("style", "font-size: 15px; transform: rotate(45deg); margin-bottom: 49.4px; left: 3.1px; cursor:pointer;");
    ch1.setAttribute("onclick", "BOX" + Rn + ".remove();")
    ch1.textContent = "+";
    c1.appendChild(ch1);

    var c2 = document.createElement("div");
    c2.setAttribute("class", "Window-selector");
    c2.setAttribute("style", "background: rgb(245, 189, 79); margin-left:31px;");
    var ch2 = document.createElement("h6");
    ch2.textContent = "-";
    c2.appendChild(ch2);

    var c3 = document.createElement("div");
    c3.setAttribute("class", "Window-selector");
    c3.setAttribute("style", "background: rgb(98, 195, 84); margin-left:51.5px;");
    var ch3 = document.createElement("h6");
    ch3.setAttribute("style", "transform: rotate(-45deg); font-size: 12px; margin-bottom: 50.7px; left: 4.2px;");
    ch3.textContent = "↕";
    c3.appendChild(ch3);

    var he2 = document.createElement("h2");
    he2.setAttribute("style", "position: absolute; bottom: 110px; left:230px; color:white; font-size: 20px; cursor: pointer; filter:brightness(50%);");
    aafafafa = "SaveText('" + Rn + "')";
    he2.setAttribute("onclick", aafafafa);
    he2.textContent = "Spara";
    box.appendChild(he2);

    var txta = document.createElement("textarea");
    txta.setAttribute("placeholder", "Skriv noteringar här...");
    txta.setAttribute("spellcheck", "false");
    txta.setAttribute("type", "text");
    txta.setAttribute("class", "Window-textbox");
    txta.setAttribute("id", "SaveText" + Rn);
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

    function move(e) {
        m.style.top = e.clientY - 80 + 'px';
        m.style.left = e.clientX - 150 + 'px';
    };
    return Rn
}
function CreateTextbox() {
    let Rn = randomInteger(1, 100000);

    DisplayTextbox(Rn, "");

    a = getCookie("TxtBoxes").split(",");
    b = getCookie("TxtBoxesValues").split(",");

    a.push("DIV" + Rn);
    b.push("aijwaiojwdojawoiaowjaoijwdojawoijojojojoj")//(document.getElementById("SaveText" + Rn).value);
    setCookie("TxtBoxes", a, 30);
    setCookie("TxtBoxesValues", b, 30);
    console.log(getCookie("TxtBoxes"));
    console.log(getCookie("TxtBoxesValues"));
}


</script>




<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->
<!-- JAVASCRIPT UPPE -->







<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->
<!-- PHP NERE -->


<body onload="init()">
<?php

function getRealIpAddr(){
    if ( !empty($_SERVER['HTTP_CLIENT_IP']) ) {
     $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']) ) {
     $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
     $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
$CurrentIPcolor = str_replace("\r\n","",$colors[array_rand($colors)]);
srand((int)str_replace(".", "", getRealIpAddr()));//gör ett random seed och tar bort punkterna från ip:n
$colors = ["red", "green", "blue", "ForestGreen", "Violet", "MediumTurquoise", "Navy", "LawnGreen", "PaleGoldenRod", "HotPink", "Grey", "Tomato", "LightSteelBlue", "Cyan", "DimGray"];
$BAD = ["fuck", "cock", "kuk", "bitch", "balls", "kuk", "snopp", "röv", "ass"];
$comment = $_POST['comment'];
$User = $_POST['name'];
$file = "textsak.txt";

function AddTime($stringa){
    global $file;
    file_put_contents($file, $stringa, FILE_APPEND);
}
function PutComment($stringa, $color){
    global $file;
    if ($color!=NULL) {
        file_put_contents($file, "<h3 style='font-weight: 900; font-size: 500; color: ", FILE_APPEND);
        file_put_contents($file, "$color'>", FILE_APPEND);
        file_put_contents($file, $stringa, FILE_APPEND);
        file_put_contents($file, "</h3>\n", FILE_APPEND);
    }else{
        global $colors;
        $CurrentIPcolor = str_replace("\r\n","",$colors[array_rand($colors)]);
        $stringa = str_replace("\r\n","<br>",$stringa);
        file_put_contents($file, "<div class='textbox' style='background: linear-gradient(to right, $CurrentIPcolor 10px, white 11px) !important;'><h3>", FILE_APPEND);
        file_put_contents($file, str_replace("\r\n"," ",$stringa), FILE_APPEND);
        file_put_contents($file, "</h3><div style='background-color: $CurrentIPcolor;' class='chat-thing'></div></div>", FILE_APPEND);
        AddTime("<h5>" . date("Y-m-d") . "‹›" . date("H:i") . "</h5>\n");
    }
}
foreach ($BAD as $bd) {
    if(strpos(strtolower($comment), strtolower($bd)) !== false){
        $comment = str_replace($bd, str_repeat("*", strlen($bd)),strtolower($comment));
    }
}
if(strpos(strtolower($comment), "bollar") !== false){
    $comment = str_replace("bollar", "🍒", strtolower($comment));
}

if(substr($comment, 0, 4) == "gif:"){
    $gif = strval(substr($comment, 4, strlen($comment) - 1));
    $CurrentIPcolor = str_replace("\r\n","",$colors[array_rand($colors)]);
    file_put_contents($file, "<div class='textbox' style='background: linear-gradient(to right, $CurrentIPcolor 9.8px, white 9.801px) !important;'><a target='_blank' href='$gif'><button class='gifBtn'><img class='GifOrImage' width='200' height='150' src=", FILE_APPEND);

    $gif = '"' . str_replace("\r\n","",$gif) . '">';

    file_put_contents($file, $gif, FILE_APPEND);
    file_put_contents($file, "</img></button></a></div><div style='background-color: $CurrentIPcolor;' class='chat-thing'></div>", FILE_APPEND);
    AddTime("<h5 class='GIF-time'>" . date("Y-m-d") . "‹›" . date("H:i") . "</h5>\n");
}
else if(substr($comment, 0, 4) == "vid:"){
    $video = strval(substr($comment, 4, strlen($comment) - 1));
    $CurrentIPcolor = str_replace("\r\n","",$colors[array_rand($colors)]);
    file_put_contents($file, "<div class='textbox' style='background: linear-gradient(to right, $CurrentIPcolor 9.8px, white 9.801px) !important;'><a target='_blank' href='$video'><button class='gifBtn'><iframe width='200' height='150' class='video-player' src=", FILE_APPEND);
    $video = '"' . str_replace("\r\n","",$video);
    $video = substr_replace($video, "embed/", 25, 25) . substr($video, 33, strlen($video)-1);

    file_put_contents($file, $video, FILE_APPEND);
    file_put_contents($file, '"allowfullscreen></iframe></button></a></div><div style="background-color: $CurrentIPcolor;" class="chat-thing"></div>', FILE_APPEND);
    AddTime("<h5 class='GIF-time'>" . date("Y-m-d") . "‹›" . date("H:i") . "</h5>\n");
}
else if(substr($comment, 0, 4) == "jam:"){
    $audio = strval(substr($comment, 4, strlen($comment) - 1));
    $audioType = substr($audio, strlen($audio) - 3, strlen($audio) - 1);
    $CurrentIPcolor = str_replace("\r\n","",$colors[array_rand($colors)]);
    file_put_contents($file, "<div class='textbox' style='background: linear-gradient(to right, $CurrentIPcolor 9.8px, white 9.801px) !important;'><audio controls id='musik'><source src='$audio' type='audio/$audioType'><div style='background-color: $CurrentIPcolor;' class='chat-thing'></div>", FILE_APPEND);
    $video = '"' . str_replace("\r\n","",$video);
    file_put_contents($file, $video, FILE_APPEND);
    file_put_contents($file, '</div></audio>', FILE_APPEND);
    AddTime("<h5 class='GIF-time'>" . date("Y-m-d") . "‹›" . date("H:i") . "</h5>\n");
}




//https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1
else if(substr($comment, 0, 1) == "<"){
    PutComment("försök inte skriva commands >:( ajabaja", "red");
}
else if($comment != "" && strlen($comment) <= 200){
    PutComment($comment, NULL);
}else if(strlen($comment) >= 200){
    $ip_user = $_SERVER['REMOTE_ADDR'];
    PutComment("@$ip_user  spamma itne snälla", "red");
}


$lines = file($file);

$comment = "";


echo "<div class='chat' id='chatContainer' style='overflow-x: hidden;'>";


echo "<br><div class='textbox' style='background: linear-gradient(to right, Turquoise 10px, white 11px) !important;'>CHAT</div><br>";
foreach ($lines as $line) {
    if ($BgCookie != "") {
        if ($BgCookie != NULL) {
            $line = str_replace("textbox", "textboxNoBG", $line);
            echo "<div>$line</div>";
        }
        
    }else{
        echo "<div>$line</div>";
    }
}
echo "<br><br><br><br><br>";
echo "</div>";
?>

<div id="Loader" class="LoaderBG" style="text-align: center;"><p id="LoaderText" style="margin-right: 215px; margin-top:15%; font-weight: 100; font-size: 120px;">Loading Resources...</p><p id="LoaderText" style="margin-right: 215px; margin-top:-3%; font-weight: 100; font-size: 40px;"><br>This Might Take A Second</p></div>
<div class="Loader"></div>
<div class="navigation-bar" id="navbg"><a href="tutorial.html"><button class="navigation-button" tabindex="1" id="Home">Hem</button></a><a href="tutorial.html"><button class="navigation-button" tabindex="2" id="Help">Bruksanvisning</button></a><a href="regler.html"><button class="navigation-button" tabindex="3" id="Rules">Regler</button></a>
<button class="navigation-button" onclick="CreateTextbox()">TEXTRUTA</button>
<button class="color-button" id="Backgrounds">Bakgrunder<div class="dropdown-content"><span>
<div class="Color-holder">
<div2 class="color-bubble" style="background: rgb(62, 124, 177);" onclick="background('rgb(62, 124, 177)')"></div2>
<div2 class="color-bubble" style="background: rgb(117, 185, 190);" onclick="background('rgb(117, 185, 190)')"></div2>
<div2 class="color-bubble" style="background: rgb(168, 204, 201);" onclick="background('rgb(168, 204, 201)')"></div2>
<div2 class="color-bubble" style="background: rgb(179, 214, 198);" onclick="background('rgb(179, 214, 198)')"></div2>
<div2 class="color-bubble" style="background: rgb(150, 224, 114);" onclick="background('rgb(150, 224, 114)')"></div2>
<div2 class="color-bubble" style="background: rgb(243, 222, 138);" onclick="background('rgb(243, 222, 138)')"></div2>
<div2 class="color-bubble" style="background: rgb(199, 214, 109);" onclick="background('rgb(199, 214, 109)')"></div2>
<div2 class="color-bubble" style="background: rgb(235, 148, 134);" onclick="background('rgb(235, 148, 134)')"></div2>
<div2 class="color-bubble" style="background: rgb(247, 111, 142);" onclick="background('rgb(247, 111, 142)')"></div2>
<div2 class="color-bubble" style="background: rgb(150, 97, 107);" onclick="background('rgb(150, 97, 107)')"></div2>
<div2 class="color-bubble" style="background: rgb(55, 80, 92);" onclick="background('rgb(55, 80, 92)')"></div2>
<div2 class="color-bubble" style="background: rgb(46, 45, 77);" onclick="background('rgb(46, 45, 77)')"></div2>

<div2 class="color-bubble" style="background: rgb(20, 20, 20);" onclick="background('rgb(20, 20, 20)')"></div2>
<div2 class="color-bubble" style="background: rgb(240, 240, 240);" onclick="reload()"></div2>

<div2 class="color-bubble" style="animation: Rainbow 1s linear infinite" onclick="rainbw()"></div2>


</div></span></div></button>
<button class="hamb-button" style="text-shadow: 0px -6.6px 0px black; color: white" id="Hamb">__<br>__<br>__<br><div class="dropdown-content"><span><a href="gifs.html">Gifs</a></span><span> ‹› </span>  <span><a href="Requests.html">Requests</a></span></div></button></div>




<div class="Disco-ball" id="Disco-ball"><div class="Disco-gradient" id="Disco-gradient"></div><div class="Disco-pin"></div></div>

<footer>
    <form action="chat.php" method="post">
        <div class="formholder">
            <input name="comment" class="input" id="textbox" style="z-index: 10;" autocomplete="off" maxlength="136"></input>
            <button id="SendBtn" type="submit" class="button"><img src="Images/send.png" width="110" height="110" class="SendImage"></img></button>
            <input type="submit" style="position: absolute; visibility: hidden;"></input>
        </div>
    </form>
</footer>
</body>

</html>     
