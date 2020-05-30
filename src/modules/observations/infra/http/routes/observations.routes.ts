import { Router } from 'express';

import ObservationsController from '../controllers/ObservationsController';

const observationsRouter = Router();
const observationsController = new ObservationsController();

observationsRouter.get('/', observationsController.index);
observationsRouter.post('/', observationsController.create);
observationsRouter.put('/', observationsController.update);

export default observationsRouter;
