import { getRepository, Repository } from 'typeorm';

import Subject from '../entities/Subject';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';
import SubjectToTag from '../entities/SubjectToTag';
import Submission from '../entities/Submission';

export default class SubjectsRepository implements ISubjectsRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  public async index(
    size: number,
    page: number,
    includeObservations: boolean,
    filters: {
      hasTag: string[][];
      lastObservationType: string[];
      ids: string[];
    }
  ): Promise<Subject[]> {
    console.log(filters);
    let subjects = await this.ormRepository.createQueryBuilder('subjects');

    // ids

    // Observations
    const q2 = includeObservations
      ? subjects.leftJoinAndSelect(
          'subjects.observations',
          'observations',
          'observations."subject_id" = subjects.id'
        )
      : subjects.leftJoin(
          'subjects.observations',
          'observations',
          'observations."subject_id" = subjects.id'
        );

    // Last Observation
    const q3 = q2.leftJoin(
      qb =>
        qb
          .from(Observation, 'observations')
          .select('MAX("created_at")', 'max_created_at')
          .addSelect('"subject_id"')
          .groupBy('"subject_id"'),
      'last_observation',
      'last_observation."subject_id" = subjects.id'
    );
    const q4 = filters.lastObservationType.length
      ? q3.innerJoinAndMapOne(
          'subjects.lastObservation',
          'subjects.observations',
          'lastObservation',
          `observations."subject_id" = subjects.id AND observations."created_at" = last_observation."max_created_at" AND observations."type_id" IN ('${filters.lastObservationType.join(
            `','`
          )}')`
        )
      : q3.leftJoinAndMapOne(
          'subjects.lastObservation',
          'subjects.observations',
          'lastObservation',
          'observations."subject_id" = subjects.id AND observations."created_at" = last_observation."max_created_at"'
        );

    const tagQuery = filters.hasTag.map(
      item => `(tags."tagId" = '${item[0]}' AND tags."value" = '${item[1]}')`
    );

    const q5 = filters.hasTag
      ? q4.innerJoinAndSelect('subjects.tags', 'tags', tagQuery.join(' OR '))
      : q4.leftJoinAndSelect('subjects.tags', 'tags');

    const q6 = q5
      .leftJoinAndSelect('lastObservation.user', 'users')
      .orderBy({
        'subjects.name': 'ASC',
        'tags.tagId': 'ASC',
      })
      .skip(size * (page - 1))
      .take(size)
      .select([
        'subjects.id',
        'subjects.name',
        'subjects.workflow_id',
        'lastObservation.id',
        'lastObservation.type_id',
        'lastObservation.value',
        'lastObservation.comment',
        'lastObservation.created_at',
        'observations.id',
        'observations.value',
        'observations.comment',
        'observations.created_at',
        'tags.id',
        'tags.tagId',
        'tags.value',
        'users.name',
      ]);
    const lala = await q6.getMany();

    return lala;
  }

  public async create({
    items,
    workflow_id,
  }: ICreateSubjectDTO): Promise<Subject[]> {
    const subjects: Subject[] = [];

    items.forEach(item => {
      const subject = this.ormRepository.create({
        name: item.name,
        workflow_id: workflow_id,
      });

      if (item.tags) {
        const tagList: SubjectToTag[] = [];
        Object.entries(item.tags).forEach(tag => {
          const subjectToTag = new SubjectToTag();
          subjectToTag.subjectId = subject.id;
          subjectToTag.tagId = tag[0];
          subjectToTag.value = tag[1];

          tagList.push(subjectToTag);
        });

        subject.tags = tagList;
      }

      this.ormRepository.save(subject);
      subjects.push(subject);
    });

    //CREATE TAGS

    return subjects;
  }
}
