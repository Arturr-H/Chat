function regex(){
    let one = document.getElementById("a1")
    let two = document.getElementById("a2")
    let string = "f.txt f1.txt f2.txt f3.txt ass.bass";
    let rgx = /(\w+)(\.txt)/g;

    let match = rgx.exec(string);
    while (match) {

        one.innerHTML = one.innerHTML + match[1] + match[2] + "<br />" 

        match = rgx.exec(string);
    }

}
function Classes() {
    class poop{
        poo(){
            return "shit";
        }
        
    }
    
    const heJ = new poop();
    
    console.log(heJ.poo())
}
function TryCatch() {
    try {
        duck(21412)
    } catch (error) {
        console.error(error);
    }
}
function Switch(){
    let num = 5;
    switch (num) {
        case 5:
            return "shit five";
        case 6: 
            return "shit six";

        default:
            return "no number";
    }
}
function newRgx() {
    let string = "hejsan.txt jag gillar kakor.txt jag vet inte vad jag ska.txt skriva.";
    let rgx = /(\w+)\.txt/g;

    let match = rgx.exec(string)

    while (match) {
        console.log("M: "+match[1])
        console.log(string)
        match = rgx.exec(string)
    }
}

let string = "piss.ass bass.ass shit.ass hejsan.sis tjej.lol"
let rgx = /(\w+)\.ass/g;

let match = rgx.exec(string);

while (match) {
    console.log(match[1])
    match = rgx.exec(string);
}