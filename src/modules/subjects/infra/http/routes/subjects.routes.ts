import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import SubjectsController from '../controllers/SubjectsController';

const subjectsRouter = Router();
const subjectsController = new SubjectsController();
subjectsRouter.use(ensureAuthenticated);

subjectsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      size: Joi.number(),
      page: Joi.number(),
      includeObservations: Joi.string(),
      hasTag: Joi.string(),
      lastObservationType: Joi.string(),
    },
  }),
  subjectsController.index
);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
subjectsRouter.post('/', subjectsController.create);

export default subjectsRouter;
