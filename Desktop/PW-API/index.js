/*const fun = require("everyday-fun");*/
const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes");

app.use(cors());

app.use(express.json());
app.use(routes);




/*app.get("./quote", function (req, res){
//req -> request -> requisição
//res -> response -> resposta
res.send(fun.getRandomQuote());
});
app.get("./joke", function (req, res){
    //joke -> piada
    res.send(fun.getRandomJoke());
    });
    app.get("./riddle", function (req, res){
        //riddle -> charada 
        res.send(fun.getRandomRiddle());
        });*/

app.listen(3001, function(){
    console.log("servidor rodando na porta 3001");
});
