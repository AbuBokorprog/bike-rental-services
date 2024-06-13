/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalError } from './app/middleware/global.error';
import { notfoundError } from './app/middleware/not.found.error';
import router from './app/router';
import config from './app/config';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('This is bike rental services');
});

// global error
app.use(globalError);

// notfound route handler
app.use(notfoundError);

export default app;
