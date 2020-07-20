import { uuid } from 'uuidv4';

import ISubjectsRepository from '../ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';
import Subject from '@modules/subjects/infra/typeorm/entities/Subject';

export default class FakeSubjectsRepository implements ISubjectsRepository {
  private subjects: Subject[] = [];

  public async index(): Promise<Subject[]> {
    return this.subjects;
  }

  public async create({
    name,
    workflow_id,
  }: ICreateSubjectDTO): Promise<Subject> {
    const subject = new Subject();

    Object.assign(subject, { id: uuid(), name, workflow_id });

    this.subjects.push(subject);

    return subject;
  }
}
