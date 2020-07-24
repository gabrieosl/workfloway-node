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
    items,
  }: ICreateSubjectDTO): Promise<ISubjectEntity[]> {
    const subject = await this.subjectsRepository.create({
      items,
    });

    return subject;
  }
}
