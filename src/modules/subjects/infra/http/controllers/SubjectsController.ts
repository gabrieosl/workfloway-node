import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSubjectsService from '@modules/subjects/services/ListSubjectsService';
import CreateSubjectService from '@modules/subjects/services/CreateSubjectService';

export default class SubjectsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSubjects = container.resolve(ListSubjectsService);

    const size = Number(request.query.size) || 20;
    const page = Number(request.query.page) || 1;

    const includeObservations = !!request.query.includeObservations;

    const hasTag = String(request.query.hasTag);
    let tags: String[][] = [];
    if (hasTag) {
      tags = hasTag.split(',').map(entry => entry.split(':'));
    }

    const lastObservationType = String(request.query.lastObservationType);
    let types: String[] = [];
    if (lastObservationType) {
      types = lastObservationType.split(',');
    }

    const subjects = await listSubjects.execute(
      size,
      page,
      includeObservations,
      { tags, types }
    );

    return response.json(subjects);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { items, workflow_id } = request.body;

    const createSubject = container.resolve(CreateSubjectService);

    const subject = await createSubject.execute({
      items,
      workflow_id,
    });

    return response.status(201).json(subject);
  }
}
