import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import TagsController from '../controllers/TagsContoller';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.use(ensureAuthenticated);

tagsRouter.get('/', tagsController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
tagsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  tagsController.create
);
tagsRouter.put(
  '/:targetId',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  tagsController.update
);
tagsRouter.delete('/:targetId', tagsController.delete);

export default tagsRouter;
