import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSubjectsService from '@modules/subjects/services/ListSubjectsService';
import CreateSubjectService from '@modules/subjects/services/CreateSubjectService';

export default class SubjectsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSubjects = container.resolve(ListSubjectsService);

    const size = Number(request.query.size) || 20;
    const page = Number(request.query.page) || 1;

    const includeObservations = !!request.params.includeObservations || false;

    const subjects = await listSubjects.execute(
      size,
      page,
      includeObservations
    );

    return response.json(subjects);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { items } = request.body;

    const createSubject = container.resolve(CreateSubjectService);

    const subject = await createSubject.execute({
      items,
    });

    return response.status(201).json(subject);
  }
}
