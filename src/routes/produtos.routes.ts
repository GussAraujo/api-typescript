import { Router } from "express";
import { getProdutos, getProduto, createProdutos, updateProdutos, deleteProduto } from "../controllers/produtos.controller";

const indexRouter =  Router();

indexRouter.route('/')
  .get(getProdutos)
  .post(createProdutos)

indexRouter.route('/:id')
  .get(getProduto)
  .put(updateProdutos)
  .delete(deleteProduto)

export default indexRouter;