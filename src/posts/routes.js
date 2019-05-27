import { Router } from 'express';
import posts from './actions';

const postRouter = Router();

// API Methods
postRouter.get('/posts', posts.list);
postRouter.get('/posts/:id', posts.get);
postRouter.put('/posts/:id', posts.update);
postRouter.delete('/posts/:id', posts.del);
postRouter.post('/posts', posts.create);

postRouter.get('/dajgajbapivo', async function dajGajbaPivo() {
  const { data } = await axios.get(posts);
  const writeDataToStorageFile: string = JSON.stringify(data, null, 2)  
  fs.writeFileSync('localStorage.json', writeDataToStorageFile);

  res.status(200).send(data);
  await next;
})

postRouter.get('/kajeskarata', async function dajGajbaPivo() {
  const { data } = await axios.get(posts);
  const writeDataToStorageFile: string = JSON.stringify(data, null, 2)  
  fs.writeFileSync('localStorage.json', writeDataToStorageFile);

  res.status(200).send(data);
  await next;
})
export default postRouter;