import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import SubjectsController from '../controllers/SubjectsController';

const subjectsRouter = Router();
const subjectsController = new SubjectsController();
subjectsRouter.use(ensureAuthenticated);

subjectsRouter.get('/', subjectsController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
subjectsRouter.post('/', subjectsController.create);

export default subjectsRouter;
