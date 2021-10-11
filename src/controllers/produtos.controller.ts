import { getRepository } from 'typeorm';
import { Produtos }  from '../entity/Produtos';
import { Request, Response } from "express";

export const getProdutos = async (req: Request, res: Response): Promise<Response> => {
    try{
        const produtos = await getRepository(Produtos).find();
        return res.json({
          result: produtos,
          back: 'http://localhost:3000/'
        });
    } catch(err) {
        console.log('Erro:', err.message);
    }
};

export const getProduto = async (req: Request, res: Response): Promise<Response> => {
  try{
      const produto = await getRepository(Produtos).findOne(req.params.id);
      return res.json({
        result: produto,
        back: 'http://localhost:3000/'
      });
  } catch(err) {
      console.log('Erro:', err.message);
  }
};

export const createProdutos = async (req: Request, res: Response): Promise<Response> => {
  try{
      const newProduto = await getRepository(Produtos).create(req.body);
      const results = await getRepository(Produtos).save(newProduto);
      return res.json({
        result: results,
        back: 'http://localhost:3000/'
      });
  } catch(err) {
      console.log('Erro:', err.message);
  }
};

export const updateProdutos = async (req: Request,res: Response): Promise<Response> => {
  const produto = await getRepository(Produtos).findOne(req.params.id);
  if (produto) {
    getRepository(Produtos).merge(produto, req.body);
    const results = await getRepository(Produtos).save(produto);
    return res.json({
      result: results,
      back: 'http://localhost:3000/'
    });
  }

  return res.json({msg: 'Not user found'});
};

export const deleteProduto = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Produtos).delete(req.params.id);
  return res.json({
    result: results,
    back: 'http://localhost:3000/'
  });
};