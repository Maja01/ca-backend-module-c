import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './index/router';

const app = express();
const port = process.env.PORT || 3001;

// app.get('/listanje', function list(res, req) {
//   const dummyData = [{
//     userName: 'test1243',
//     firstName: 'test 1',
//     lastName: 'last 1'
//   },
//   {
//     userName: 'test1243',
//     firstName: 'test 1',
//     lastName: 'last 1'
//   }]
//   res.status(200).send(dummyData)
// })

app.use(logger('dev'));
app.use(cors());
app.use(helmet()); // helps you secure your Express apps by setting various HTTP headers
app.use(bodyParser.urlencoded({ extended: true }));  // basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
// app.use(bodyParser.json()); // basically tells the system that you want json to be used
app.use(bodyParser.json({ type: '*/*' }));

app.use(indexRouter);

app.listen(port, () => {
  console.log(`API Server is listening on ${port}`);
});
