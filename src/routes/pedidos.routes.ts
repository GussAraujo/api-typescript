import { Router } from "express";
import { getPedidos, getPedido, createPedido, updatePedidos, deletePedido } from "../controllers/pedidos.controller";

const indexRouter =  Router();

indexRouter.route('/')
  .get(getPedidos)
  .post(createPedido)

indexRouter.route('/:id')
  .get(getPedido)
  .put(updatePedidos)
  .delete(deletePedido)
  
export default indexRouter;