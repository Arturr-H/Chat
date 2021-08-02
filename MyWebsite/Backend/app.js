const express = require("express");
const app = express();

app.use(express.static('Static')); // FOLDERN SOM HETER STATIC SKA HA ALLA VANLIGA SIDOR I SIG

app.get("/app", (req, res) => {
    res.send("<h1>shtish th</h1>");
})

app.listen(3000, () => {
    console.log("Launched!")

})