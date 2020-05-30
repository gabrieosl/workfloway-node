import { Router } from 'express';

import ObservationTypesController from '../controllers/ObservationTypesController';

const observationsTypesRouter = Router();
const observationTypesController = new ObservationTypesController();

observationsTypesRouter.post('/', observationTypesController.create);
observationsTypesRouter.get('/', observationTypesController.index);

export default observationsTypesRouter;
