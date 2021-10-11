import { Router } from "express";

const indexRouter =  Router();

indexRouter.route('/').get(
  async function getIndex(req, res){
    return res.json({
        saudações: "Bem vindos, API Node JS + TypeScript",
        pedidos: 'http://localhost:3000/pedidos',
        produtos: 'http://localhost:3000/produtos',
    });
  }
)

export default indexRouter;