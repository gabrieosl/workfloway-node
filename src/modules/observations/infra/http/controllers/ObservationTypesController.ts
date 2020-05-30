import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateObservationTypeService from '@modules/observations/services/CreateObservationTypeService';
import ListObservationTypeService from '@modules/observations/services/ListObservationTypesService';

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
}
