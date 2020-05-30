import { getRepository, Repository } from 'typeorm';

import Subject from '../entities/Subject';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';

export default class SubjectsRepository implements ISubjectsRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  public async index(): Promise<Subject[]> {
    const subjects = this.ormRepository.find();

    return subjects;
  }

  public async create({
    project,
    study,
    matricule,
    batch,
  }: ICreateSubjectDTO): Promise<Subject> {
    const subject = this.ormRepository.create({
      project,
      study,
      matricule,
      batch,
    });

    this.ormRepository.save(subject);

    return subject;
  }
}
