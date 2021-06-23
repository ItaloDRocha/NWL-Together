import express from "express";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
 */


/**
 * TIPOS DE PARAMETROS
 * Routes Params => http://localhost:3000/produtos
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */
app.get("/teste", (request, response) => {
  //request => Entrando
  // Response => Saindo

  return response.send("olá nlw");
});

app.post("/teste-post", (request, response) => {
  return response.send("ola nlw metodo POST");
});

//porta como parâmetro
app.listen(3000, () => console.log("Server is running"));
