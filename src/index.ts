import { Server } from './server'
import 'reflect-metadata';
import { createConnection } from "typeorm";

createConnection().then(async connection =>{
  const server = new Server(3000);
  server.listen();
}).catch(error => console.log(error));


// import './database/mysql';

// function main() {
//   const server = new Server(3000);
//   server.listen();
// }

// main();