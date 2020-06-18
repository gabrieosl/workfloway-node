import { getRepository, Repository } from 'typeorm';

import Subject from '../entities/Subject';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';

export default class SubjectsRepository implements ISubjectsRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  public async index(
    size: number,
    page: number,
    includeObservations: boolean
  ): Promise<Subject[]> {
    let subjects = await this.ormRepository
      .createQueryBuilder('subjects')
      .leftJoinAndSelect('subjects.observations', 'observations')
      .leftJoinAndSelect('subjects.submissions', 'submissions')
      .leftJoinAndSelect('observations.user', 'users')
      .skip(size * (page - 1))
      .take(size)
      .select([
        'subjects.id',
        'subjects.name',
        'subjects.workflow_id',
        'observations.value',
        'observations.comment',
        'observations.created_at',
        'submissions.repetition',
        'submissions.closed',
        'users.name',
      ])
      .getMany();

    // const subjects = await this.ormRepository.find({
    //   take: size,
    //   skip: size * (page - 1),
    //   relations:
    //     (!includeObservations && ['observations', 'observations.user']) ||
    //     undefined,
    // });

    return subjects;
  }

  public async create({
    name,
    workflow_id,
    tags,
  }: ICreateSubjectDTO): Promise<Subject> {
    const subject = this.ormRepository.create({
      name,
      workflow_id,
    });

    this.ormRepository.save(subject);

    //CREATE TAGS

    return subject;
  }
}
