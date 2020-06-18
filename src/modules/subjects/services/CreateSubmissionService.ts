import { injectable, inject } from 'tsyringe';

import ISubmissionsRepository from '../repositories/ISubmissionsRepository';
import ISubmissionEntity from '../entities/ISubmissionEntity';
import ICreateSubmissionDTO from '../dtos/ICreateSubmissionDTO';

@injectable()
export default class CreateSubmissionService {
  constructor(
    @inject('SubmissionsRepository')
    private submissionsRepository: ISubmissionsRepository
  ) {}

  public async execute({
    count,
    vehicle,
    subject_id,
    customer,
  }: ICreateSubmissionDTO): Promise<ISubmissionEntity> {
    const submission = await this.submissionsRepository.create({
      count,
      vehicle,
      subject_id,
      customer,
    });

    return submission;
  }
}
