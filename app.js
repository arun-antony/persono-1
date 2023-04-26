const express = require("express");
const app = express();
app.use(express.static(__dirname+"/my-personal-site/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/my-personal-site/index.html")
})



app.get("/contact", (req, res) => {
    res.sendFile(__dirname+"/my-personal-site/contact.html")
})

app.get("/family", (req, res) => {
    res.sendFile(__dirname+"/my-personal-site/family.html")
})

app.get("/html-basics", (req, res) => {
    res.sendFile(__dirname+"/my-personal-site/html-basics.html")
})


app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})