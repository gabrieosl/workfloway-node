import { getRepository, Repository } from 'typeorm';

import Subject from '../entities/Subject';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';
import Submission from '../entities/Submission';

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

      .leftJoinAndSelect(
        'subjects.observations',
        'observations',
        'observations."subject_id" = subjects.id' // AND observations."created_at" = last_observation."max_created_at"'
      )

      .leftJoin(
        qb =>
          qb
            .from(Observation, 'observations')
            .select('MAX("created_at")', 'max_created_at')
            .addSelect('"subject_id"')
            .groupBy('"subject_id"'),
        'last_observation',
        'last_observation."subject_id" = subjects.id'
      )
      .leftJoinAndMapOne(
        'subjects.lastObservation',
        'subjects.observations',
        'lastObservation',
        'observations."subject_id" = subjects.id AND observations."created_at" = last_observation."max_created_at"'
      )

      .leftJoinAndSelect('lastObservation.user', 'users')

      .leftJoinAndSelect(
        'subjects.submissions',
        'submissions',
        'submissions."subject_id" = subjects.id'
      )
      .leftJoin(
        qb =>
          qb
            .from(Submission, 'submissions')
            .select('MAX("created_at")', 'max_created_at')
            .addSelect('"subject_id"')
            .groupBy('"subject_id"'),
        'last_submission',
        'last_submission."subject_id" = subjects.id'
      )

      .leftJoinAndMapOne(
        'subjects.lastSubmission',
        qb =>
          qb
            .from(Submission, 'submissions')
            .select('MAX("created_at")', 'max_created_at')
            .addSelect('"subject_id"')
            .groupBy('"subject_id"'),
        // .where('submissions."subject_id" = subjects.id'),
        'lastSubmission',
        'submissions."subject_id" = subjects.id AND submissions."created_at" = last_submission."max_created_at"'
      )
      // .leftJoinAndMapOne(
      //   'subjects.lastSubmission',
      //   'subjects.submissions',
      //   'lastSubmission',
      //   'submissions."subject_id" = subjects.id AND submissions."created_at" = last_submission."max_created_at"'
      // )

      // .leftJoin('subjects.submissions', 'submissions')

      .orderBy({
        'subjects.name': 'ASC',
      })
      .skip(size * (page - 1))
      .take(size)
      // .select([
      //   'subjects.id',
      //   'subjects.name',
      //   'subjects.workflow_id',
      //   'lastObservation.id',
      //   'lastObservation.type',
      //   'lastObservation.id',
      //   'lastObservation.id',
      //   'observations.id',
      //   'observations.value',
      //   'observations.comment',
      //   'observations.created_at',
      //   'lastSubmission.id',
      //   'lastSubmission.closed',
      //   'lastSubmission.repetition',
      //   'submissions.closed',
      //   'submissions.repetition',
      //   'users.name',
      // ])
      .getMany();

    // const subjects = await this.ormRepository.find({
    //   take: size,
    //   skip: size * (page - 1),
    //   relations: ['observations', 'observations.user', 'submissions'],
    //   order: {
    //     name: 'ASC',
    //   },
    //   select: [
    //     'id',
    //     'name',
    //     'workflow_id',
    //     // 'observations.value',
    //     // 'observations.comment',
    //     // 'observations.created_at',
    //     // 'submissions.repetition',
    //     // 'submissions.closed',
    //     // 'users.name',
    //   ],
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
