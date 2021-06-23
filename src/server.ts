import express from "express";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
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
