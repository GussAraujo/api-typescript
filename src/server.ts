import express, { Application } from 'express';

import indexRouter from './routes/index.routes';
import produtosRouter from './routes/produtos.routes';
import pedidosRouter from './routes/pedidos.routes';

export class Server {
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.middlewares();
        this.settings();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', indexRouter);
        this.app.use('/produtos', produtosRouter);
        this.app.use('/pedidos', pedidosRouter);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor Rodando!');
    }
}