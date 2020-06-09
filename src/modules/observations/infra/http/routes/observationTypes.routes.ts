import { Router } from 'express';

import ObservationTypesController from '../controllers/ObservationTypesController';

const observationsTypesRouter = Router();
const observationTypesController = new ObservationTypesController();

observationsTypesRouter.get('/', observationTypesController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
observationsTypesRouter.post('/', observationTypesController.create);

export default observationsTypesRouter;
