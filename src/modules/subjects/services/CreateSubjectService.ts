import { injectable, inject } from 'tsyringe';

import ISubjectsRepository from '../repositories/ISubjectsRepository';
import ISubjectEntity from '../entities/ISubjectEntity';
import ICreateSubjectDTO from '../dtos/ICreateSubjectDTO';

@injectable()
export default class CreateSubjectService {
  constructor(
    @inject('SubjectsRepository')
    private subjectsRepository: ISubjectsRepository
  ) {}

  public async execute({
    name,
    workflow_id,
    tags,
  }: ICreateSubjectDTO): Promise<ISubjectEntity> {
    const subject = await this.subjectsRepository.create({
      name,
      workflow_id,
      tags,
    });

    return subject;
  }
}
