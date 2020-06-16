import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordsRouter = Router();
const forgotPasswordsController = new ForgotPasswordController();
const resetPasswordsController = new ResetPasswordController();

passwordsRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordsController.create,
);
passwordsRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordsController.create,
);

export default passwordsRouter;
