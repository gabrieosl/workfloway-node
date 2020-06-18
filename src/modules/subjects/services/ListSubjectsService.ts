import { injectable, inject } from 'tsyringe';

import ISubjectsRepository from '../repositories/ISubjectsRepository';
import ISubjectEntity from '../entities/ISubjectEntity';

@injectable()
export default class ListSubjectsService {
  constructor(
    @inject('SubjectsRepository')
    private subjectsRepository: ISubjectsRepository
  ) {}

  public async execute(
    size: number,
    page: number,
    includeObservations: boolean
  ): Promise<ISubjectEntity[]> {
    const subjects = await this.subjectsRepository.index(
      size,
      page,
      includeObservations
    );

    return subjects;
  }
}
