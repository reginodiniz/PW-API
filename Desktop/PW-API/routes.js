const express = require("express");
const router = express.Router();
const knex = require("./database/conection");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

router.get("/clientes", async function(req,res) {/*pode ser: async(req,res)=>{}*/
  const clientes = await knex("clientes");/*para poder usar a await, a sua função tem que ser assicrona*/
     res.json(clientes);
});

router.post("/clientes", upload.single("imagem"), async function(req,res) {/*pode ser: async(req,res)=>{}*/
console.log("testando");
console.log(req.body);  

const result = await knex("clientes").insert(req.body);/*para poder usar a await, a sua função tem que ser assicrona*/
     res.json(result);
});

router.get("/codigos", async function(req,res) {/*pode ser: async(req,res)=>{}*/
  const clientes = await knex("codigos");/*para poder usar a await, a sua função tem que ser assicrona*/
     res.json(codigos);
});

router.get("/valor", async function(req,res) {/*pode ser: async(req,res)=>{}*/
  const clientes = await knex("valor");/*para poder usar a await, a sua função tem que ser assicrona*/
     res.json(valor);
});
router.get("/imagem", async function(req,res) {/*pode ser: async(req,res)=>{}*/
  const clientes = await knex("imagem");/*para poder usar a await, a sua função tem que ser assicrona*/
     res.json(imagem);
});


module.exports = router;