import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSubjectsService from '@modules/subjects/services/ListSubjectsService';
import CreateSubjectService from '@modules/subjects/services/CreateSubjectService';

export default class SubjectsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSubjects = container.resolve(ListSubjectsService);

    const subjects = await listSubjects.execute();

    return response.json(subjects);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { study, batch, matricule, project } = request.body;

    const createSubject = container.resolve(CreateSubjectService);

    const subject = await createSubject.execute({
      study,
      batch,
      matricule,
      project,
    });

    return response.json(subject);
  }
}
