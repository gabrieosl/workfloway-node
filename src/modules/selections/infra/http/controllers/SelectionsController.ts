import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSelectionsService from '@modules/selections/services/ListSelectionsService';
import CreateSelectionService from '@modules/selections/services/CreateSelectionService';
import ShowSelectionService from '@modules/selections/services/ShowSelectionService';

export default class SelectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSelections = container.resolve(ListSelectionsService);

    const selections = await listSelections.execute();

    return response.json(selections);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createSelection = container.resolve(CreateSelectionService);

    const { id, name, content } = request.body;

    const workflow = await createSelection.execute({ id, name, content });

    return response.status(201).json(workflow);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showSelection = container.resolve(ShowSelectionService);

    const { id } = request.params;

    const workflow = await showSelection.execute(id);
    return response.json(workflow);
  }
}
