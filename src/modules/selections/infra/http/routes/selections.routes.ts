import { Router } from 'express';

import SelectionsController from '../controllers/SelectionsController';

const selectionsRouter = Router();
const selectionsController = new SelectionsController();

selectionsRouter.get('/', selectionsController.index);
selectionsRouter.get('/:id', selectionsController.show);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
selectionsRouter.post('/', selectionsController.create);
// selectionsRouter.delete('/:id', selectionsController.delete);
export default selectionsRouter;
