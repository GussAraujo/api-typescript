import { getRepository } from 'typeorm';
import { Pedidos }  from '../entity/Pedidos';
import { Request, Response } from "express";

export const getPedidos = async (req: Request, res: Response) => {
    try{
        const produtos = await getRepository(Pedidos).query(
          `SELECT pedidos.id_pedido, pedidos.quantidade, produtos.id_produto, produtos.nome, produtos.preco
          FROM pedidos INNER JOIN produtos ON produtos.id_produto = pedidos.id_produto`);
        return res.json(produtos);
    } catch(err) {
        console.log('Erro:', err.message);
    }
};

export const getPedido = async (req: Request, res: Response) => {
  try{
      const pedido = await getRepository(Pedidos).findOne(req.params.id);
      return res.json(pedido);
  } catch(err) {
      console.log('Erro:', err.message);
  }
};

export const createPedido = async (req: Request, res: Response) => {
  try{
      const newPedido = await getRepository(Pedidos).create(req.body);
      const results = await getRepository(Pedidos).save(newPedido);
      return res.json(results);
  } catch(err) {
      console.log('Erro:', err.message);
  }
};

export const updatePedidos = async (req: Request,res: Response) => {
  const pedido = await getRepository(Pedidos).findOne(req.params.id);
  if (pedido) {
    getRepository(Pedidos).merge(pedido, req.body);
    const results = await getRepository(Pedidos).save(pedido);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};

export const deletePedido = async (req: Request, res: Response) => {
  const results = await getRepository(Pedidos).delete(req.params.id);
  return res.json(results);
};