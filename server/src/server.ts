import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // por padrão, o express nao consegue ler json, mas, com essa função ele consegue
app.use(routes);
app.listen(3333);

// GET
// POST
// PUT
// DELETE

// corpo (Request body): Dados para criação ou atualização de um registro
// Route params: Identificar qual recurso eu quero atualizar ou deletar
// query params: paginação, filtros, ordenação 
