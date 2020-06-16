import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendMailForgotPasswordService from '@modules/users/services/SendMailForgotPasswordService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendMailForgotService = container.resolve(
      SendMailForgotPasswordService,
    );

    await sendMailForgotService.execute({
      email,
    });

    return response.status(204).json();
  }
}
