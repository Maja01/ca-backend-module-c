// import { action } from './actions';

// const { list, get } = action;

import users from './actions';

import { Router } from 'express';

import express from 'express';
const router = express.Router();

const studentRouter = Router();

studentRouter.get('/dajmigisitestudenti', users.list);

export default studentRouter;
