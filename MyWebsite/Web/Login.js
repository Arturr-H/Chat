let sbtBtn = document.getElementById("hov")
sbtBtn.addEventListener("mousedown", uLgFDb)

let pswInp = document.getElementById("psw")
let emaInp = document.getElementById("ema")


function uLgFDb() {
    if (pswInp.value.length <= 1) {
        
        document.getElementById("FalseText").innerHTML = "Please specify a password!";

    }

    else if (emaInp.value.includes("@") && emaInp.value.includes(".") && !emaInp.value.includes(" ")) {
        document.getElementById("FalseText").innerHTML = "";

        var faunadb = window.faunadb
        var q = faunadb.query

        var serverClient = new faunadb.Client({
        secret: 'fnAEKuqzuwACBcehmLnXpljSzUgdvfbS9e_MwlTv',
        })

        serverClient.query(
            q.Create(
                q.Collection('Accounts'),
                { data: { Email: emaInp.value, Password: pswInp.value} },
            )

        )
    }else{
        document.getElementById("FalseText").innerHTML = "Email does not exist";

    }
}
