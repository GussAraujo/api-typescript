import { Server } from './server'
import 'reflect-metadata';
import './database/mysql';

function main() {
  const server = new Server(3000);
  server.listen();
}

main();