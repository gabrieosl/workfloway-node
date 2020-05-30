import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateObservationController from '@modules/observations/services/CreateObservationService';

export default class ObservationController {
  public async index(request: Request, response: Response) {}
  public async create(request: Request, response: Response) {
    const createObservation = container.resolve(CreateObservationController);

    const observation = createObservation.execute();
  }
  public async update(request: Request, response: Response) {}
}
