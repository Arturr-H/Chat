let inp = document.getElementById("inp")
let Cmd = "";
let BreakNow = false;
let CurrentVariables = [];

let CmdHistIndex;
let CommandHistory = [];


let Multilining = false;
let MultilineCode = [];


document.addEventListener("keydown", function(e){
    window.scrollTo(0, 9999999);
    if (e.code == "ArrowUp") {
        CmdHistory();
    }
    if (e.code == "Backspace"){
        if(Cmd.length>=1) {
            if (document.getElementById("z") != null) {
                document.getElementById("z").remove();
            }
            inp.innerHTML = inp.innerHTML.substring(0, inp.innerHTML.length-1) + "<z id='z'></z>";
            Cmd = Cmd.substring(0, Cmd.length-1);
        }        
    }
    if (e.code == "Enter"){
        if (Multilining) {
            if (Cmd.indexOf("...") == -1) {
                CmdHistIndex = CommandHistory.length

                if (document.getElementById("z") != null) {
                    document.getElementById("z").remove();
                }
                inp.innerHTML += "<br /><z id='z'></z>"
                CommandHistory.push(Cmd)
    
    
                MultilineCode.push(Cmd)
    
                Cmd = "";
                console.log(MultilineCode)
            }else{
                CmdHistIndex = CommandHistory.length

                if (document.getElementById("z") != null) {
                    document.getElementById("z").remove();
                }
                inp.innerHTML += "<br /><z id='z'></z>"
                CommandHistory.push(Cmd)
                CheckCommand(Cmd)
                Cmd = ""; 
            }

        }else{
            CmdHistIndex = CommandHistory.length

            if (document.getElementById("z") != null) {
                document.getElementById("z").remove();
            }
            inp.innerHTML += "<br /><z id='z'></z>"
            CommandHistory.push(Cmd)
            CheckCommand(Cmd)
            Cmd = "";
        }

    }else{
        if (e.key.length<=1) {
            if (document.getElementById("z") != null) {
                document.getElementById("z").remove();

            }
            inp.innerHTML += e.key + "<z id='z'></z>";
            Cmd+=e.key;
        }
    }
})


function CheckCommand(C) {


    //        CONVERT TO INT
    //        CONVERT TO INT
    //        CONVERT TO INT

    if (C.indexOf("int[") != -1 && C.indexOf("]") != -1) {
        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        let Done = false;
        let Cindex = 0;

        Checker: while (Done == false) {
            let temp = parseInt(C.substring(C.indexOf("int[")+4, C.indexOf("]")))

            C = C.replace("int[" + C.substring(C.indexOf("int[")+4, C.indexOf("]")) + "]", temp)

            Cindex++;
            if (C.indexOf("int[") == -1) {
                Done = true;
            }
            if (Cindex >= 150) {
                break Checker;
            }
        }
    }
    //       DIVISION
    //       DIVISION
    //       DIVISION

    if (C.indexOf("min[") != -1 && C.indexOf("]") != -1) {
        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        let Done = false;
        let Cindex = 0;

        Checker: while (Done == false) {
            let temp = C.substring(C.indexOf("min[")+4, C.indexOf("]"))
        
            let Values = temp.split("-");
    
            let Final = parseFloat(Values[0])*2;//svårt att förklara, foreach loopen minusar alltid värdet så börja med dubbelt på första
            Values.forEach(element => {
                Final -= parseFloat(element)
            });
    
            C = C.replace("min[" + temp + "]", Final)
            Cindex++;
            if (C.indexOf("min[") == -1) {
                Done = true;
            }
            if (Cindex >= 150) {
                break Checker;
            }
        }

    }
    //       ADDITION
    //       ADDITION
    //       ADDITION

    if (C.indexOf("add[") != -1 && C.indexOf("]") != -1) {
        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        let Done = false;
        let Cindex = 0;

        Checker: while (Done == false) {
            let temp = C.substring(C.indexOf("add[")+4, C.indexOf("]"))
            
            let Values = temp.split("+");

            let Final = 0;
            Values.forEach(element => {
                Final += parseFloat(element)
            });
            C = C.replace("add[" + temp + "]", Final)

            Cindex++;
            if (C.indexOf("add[") == -1) {
                Done = true;
            }
            if (Cindex >= 150) {
                break Checker;
            }
        }

    }
    //       BREAK OPERATOR
    //       BREAK OPERATOR
    //       BREAK OPERATOR

    if (C.substring(0, 2).toLowerCase() != "v:"){
        C = C.replaceAll("_b_", "<br /><span style='color: white'> > ")
    }
    //       AND OPERATOR
    //       AND OPERATOR
    //       AND OPERATOR

    if (C.indexOf("##") != -1) {
        tempC = C.replace(" ## ", ",").split(",")
        tempC.forEach(element => {
            CheckCommand(element)
        });
    }
    //       QUICK VIEW VARIABLES
    //       QUICK VIEW VARIABLES
    //       QUICK VIEW VARIABLES

    if (C[0] == ":" && C.slice(-1) == ":") {
        let VariableNotExist = true;
        CurrentVariables.forEach(element => {

            if (C == ":" + element[0] + ":") {VariableNotExist = false;}//CHECK IF VARIABLE EXIST

            C = C.replaceAll(":" + element[0] + ":", element[1]);
        });

        if (VariableNotExist) {
            TError("Variable(s) does not exist");
        }else{
            ReturnAns(C);
        }
    }


    if (C == "...") {
        if (Multilining) {
            Multilining = false;

            MultilineCode.forEach(element =>{
                CheckCommand(element);
            })

        }else{
            Multilining = true;

        }
    }
    //       VARIABLES
    //       VARIABLES
    //       VARIABLES

    else if (C.substring(0, 2).toLowerCase() == "v:") {
        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        CurrentVariables.forEach(element => {//CHECK IF VARIABLE ALREADY EXISTS AND CHANGE IT IF SO...

            if (element[0] == C.substring(2, C.indexOf("=")).replace(/ /g,'')) {
                console.log("tyea its not new")
            }
        })

        if (C.indexOf("=") != -1 && C.indexOf("") != -1) {
            let variableName = C.substring(2, C.indexOf("=")-1);
            let variableValue = C.substring(C.indexOf("=")+2, C.length);
    
            ReturnAns("'" + variableName + "' = '" + variableValue + "'");

            CurrentVariables.push([variableName, variableValue]);
        }else{
            TError("Incorrectly declared variable. Use '=>' to set value.")
        }

    }
    //       USELESS
    //       USELESS
    //       USELESS

    else if (C.substring(0, 6).toLowerCase() == "prutt(" && C.slice(-1) == ')') {
        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        let PBR = C.substring(6, C.length-1)

        if (C.length-1 != 6) {

            var audio5 = new Audio('../audio/Fart.mp3')
            audio5.playbackRate = parseFloat(PBR);
            audio5.play();
        }else{
            TError("Missing 1 argument: float")
        }

    }
    //      PRINT FUNCTION
    //      PRINT FUNCTION
    //      PRINT FUNCTION

    else if (C.substring(0, 6).toLowerCase() == 'print(' && C.slice(-1) == ')') {

        CurrentVariables.forEach(element => {C = C.replaceAll(":" + element[0] + ":", element[1]);});//REPLACE ALL THE VARIABLENAMES WITH THEIR VALUES

        ReturnAns(C.substring(6, C.length-1))

    }
    //      LOOP FUNCTION
    //      LOOP FUNCTION
    //      LOOP FUNCTION

    else if (C.substring(0, 5).toLowerCase() == 'loop ' && C.indexOf(":") != -1) {
        for (let i = 0; i < parseInt(C.substring(5, C.indexOf(";"))); i++) {

            let delay = parseFloat(C.substring(C.indexOf(";")+1, C.indexOf(":")))

            setTimeout(() => {
                // GET ALL VARIABLES TO REPLACE
                let Command = C.substring(C.indexOf(":")+2, C.length)
                console.log("Cmd " + Command)
                console.log("CmdS " + Command.replaceAll(":i:", i))

                CheckCommand(Command.replaceAll(":i:", i))
                
            }, delay*i*1000);
        }
    }
    //       CLEAR MEMORY
    //       CLEAR MEMORY
    //       CLEAR MEMORY

    else if (C.substring(0, 8).toLowerCase() == 'clearmem') {
        BreakNow = true;
        inp.innerHTML = "<z id='z'></z>"
        console.log(CurrentVariables + " bEf")

        CurrentVariables = []

        console.log(CurrentVariables + " aft")

        
    }
    //       CLEAR
    //       CLEAR
    //       CLEAR

    else if (C.substring(0, 5).toLowerCase() == 'clear') {
        BreakNow = true;
        inp.innerHTML = "<z id='z'></z>"
    }

    //       HELP
    //       HELP
    //       HELP

    else if (C.substring(0, 4).toLowerCase() == 'help') {
        Help();
        if (document.getElementById("z") != null) {
            document.getElementById("z").remove();
        }
        inp.innerHTML += "<br /><z id='z'></z>"
        Cmd = "";
        window.scrollTo(0, 9999999);
    }
    //       ENTERABLE
    //       ENTERABLE
    //       ENTERABLE

    else if (C == "") {

    }
    //       ERROR
    //       ERROR
    //       ERROR

    else{
        TError("");
    }
    Cmd = ""
}

function TError(ss) {
    if (ss == "") {
        inp.innerHTML += "<span style='color: red'>" + " > Error: No such command: " + Cmd + "</span><br />"
        document.getElementById("z").remove();
        inp.innerHTML += "<z id='z'></z>"
    }else{
        inp.innerHTML += "<span style='color: red'>" + ss + "</span><br />"
        document.getElementById("z").remove();
        inp.innerHTML += "<z id='z'></z>"
    }
}
function ReturnAns(Ans) {
    inp.innerHTML += "<span style='color: white'> > " + Ans + "</span><br />"
    document.getElementById("z").remove();
    inp.innerHTML += "<z id='z'></z>"
}
function Help() {
    inp.innerHTML += 
    `
    <span style='color: white'>    
    
        To Declare a variable:<br /><br />

        v:VariableName = VariableValue<br /><br />

        To print anything, type this:<br /><br />

        print(YourMessage)<br /><br />

        To Loop through anything, type this:<br /><br />

        loop LoopTimes;LoopOffset(seconds): CommandHere.<br /><br />

        Example: 'loop 5;0.5: print(hello)'<br /><br />

        type 'clear' to clear the terminal.<br /><br />

        :VariableName: to quickview a variable value<br /><br />

        min[Value-OtherValue] to divide anything<br /><br />

        example: print(min[15-5]) > 10<br /><br />

        add[Value+OtherValue] to add stuff<br /><br />

        int[Value] to convert value to an integer<br /><br />

        example: int[10.2692751] > 10<br /><br />

        Double hashtag == and.<br /><br />

        Example: print(hello ) ## print(there) /// > hello there<br /><br />

        Variables are stored in the ram, if you want to reset all of<br /><br />
        them, type 'clearmem'<br /><br />

        if you want the index of a loop, use ':i:'<br /><br />

        example: loop 10;1: print(:i:)

        ///>
        0
        1
        2
        3
        4
        5
        6
        7
        8
        9<br /><br />

        Use the up-arrow on your keyboard to go through your command history<br /><br />

        If you'd like to write commands with multiple lines, begin with 3 dots<br /><br />

        example:<br /><br />
        ...<br />
        print(hello)<br />
        print(world)<br />
        ...<br /><br />
        Output:<br />
        hello<br />
        world<br /><br />



    </span><br />
    `

}
function CmdHistory() {
    for (let i = 0; i < 200; i++) {
        if(Cmd.length>=1) {
            if (document.getElementById("z") != null) {
                document.getElementById("z").remove();
            }
            inp.innerHTML = inp.innerHTML.substring(0, inp.innerHTML.length-1) + "<z id='z'></z>";
            Cmd = Cmd.substring(0, Cmd.length-1);
        }        
    }

    console.log(CmdHistIndex)
    
    if (CommandHistory.length >= 1 && CmdHistIndex >= 0) {
        inp.innerHTML += CommandHistory[CmdHistIndex]
        Cmd = ""
        Cmd = CommandHistory[CmdHistIndex]
        CmdHistIndex--;
    
        if (document.getElementById("z") != null) {
            document.getElementById("z").remove();
        }
        inp.innerHTML = inp.innerHTML.substring(0, inp.innerHTML.length) + "<z id='z'></z>";
    }


}