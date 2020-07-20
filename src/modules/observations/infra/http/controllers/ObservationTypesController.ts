import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateObservationTypeService from '@modules/observations/services/CreateObservationTypeService';
import ListObservationTypeService from '@modules/observations/services/ListObservationTypesService';
import UpdateObservationTypeService from '@modules/observations/services/UpdateObservationTypeService';

export default class ObservationTypesController {
  public async index(request: Request, response: Response) {
    const listObservationTypes = container.resolve(ListObservationTypeService);

    const observationTypes = await listObservationTypes.execute();

    return response.json(observationTypes);
  }
  public async create(request: Request, response: Response) {
    const { name } = request.body;

    const createObservationType = container.resolve(
      CreateObservationTypeService
    );

    const observationType = await createObservationType.execute({ name });

    return response.json(observationType);
  }

  public async update(request: Request, response: Response) {
    const { targetId } = request.params;
    const { name } = request.body;

    const updateObservationType = container.resolve(
      UpdateObservationTypeService
    );

    const observationType = await updateObservationType.execute({
      id: targetId,
      name,
    });

    return response.json(observationType);
  }
}
