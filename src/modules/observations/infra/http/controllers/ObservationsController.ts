import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateObservationController from '@modules/observations/services/CreateObservationService';
import ListObservationService from '@modules/observations/services/ListObservationsService';
import UpdateObservationService from '@modules/observations/services/UpdateObservationService';

export default class ObservationController {
  public async index(request: Request, response: Response) {
    const listObservations = container.resolve(ListObservationService);

    const observations = await listObservations.execute();

    return response.json(observations);
  }
  public async create(request: Request, response: Response) {
    const { value, comment, type_id, subject_ids } = request.body;
    const user_id = request.user.id;
    const createObservation = container.resolve(CreateObservationController);

    const observation = await createObservation.execute({
      value,
      comment,
      type_id,
      subject_ids,
      user_id,
    });

    return response.status(201).json(observation);
  }
  public async update(request: Request, response: Response) {
    const { targetId } = request.params;
    const { comment, value, type_id } = request.body;

    const updateObservation = container.resolve(UpdateObservationService);

    const observation = await updateObservation.execute({
      id: targetId,
      comment,
      value,
      type_id,
    });

    return response.json(observation);
  }
}
