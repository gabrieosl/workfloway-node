import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ObservationTypesController from '../controllers/ObservationTypesController';

const observationsTypesRouter = Router();
const observationTypesController = new ObservationTypesController();

observationsTypesRouter.get('/', observationTypesController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
observationsTypesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  observationTypesController.create
);
observationsTypesRouter.put(
  '/:targetId',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  observationTypesController.update
);

export default observationsTypesRouter;
