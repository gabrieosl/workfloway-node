import { uuid } from 'uuidv4';

import ISubmissionsRepository from '../ISubmissionsRepository';
import ICreateSubmissionDTO from '@modules/subjects/dtos/ICreateSubmissionDTO';
import Submission from '@modules/subjects/infra/typeorm/entities/Submission';

export default class FakeSubmissionsRepository
  implements ISubmissionsRepository {
  private submissions: Submission[] = [];

  public async index(): Promise<Submission[]> {
    return this.submissions;
  }

  public async create({
    count,
    customer,
    subject_id,
    vehicle,
  }: ICreateSubmissionDTO): Promise<Submission> {
    const submission = new Submission();

    Object.assign(submission, {
      id: uuid(),
      count,
      customer,
      subject_id,
      vehicle,
    });

    this.submissions.push(submission);

    return submission;
  }
}
