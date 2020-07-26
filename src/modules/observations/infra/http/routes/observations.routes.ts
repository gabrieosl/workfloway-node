import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import ObservationsController from '../controllers/ObservationsController';

const observationsRouter = Router();
const observationsController = new ObservationsController();

observationsRouter.use(ensureAuthenticated);

observationsRouter.get('/', observationsController.index);
observationsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      value: Joi.string().required(),
      comment: Joi.string(),
      type_id: Joi.string().required(),
      subject_ids: Joi.array().items(Joi.string()).required(),
    },
  }),
  observationsController.create
);
observationsRouter.put(
  '/targetId',
  celebrate({
    [Segments.BODY]: {
      value: Joi.string().required(),
      comment: Joi.string(),
      type_id: Joi.string().required(),
    },
  }),
  observationsController.update
);

export default observationsRouter;
