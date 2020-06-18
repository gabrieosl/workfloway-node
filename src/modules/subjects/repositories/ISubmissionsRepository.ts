import ISubmissionEntity from '../entities/ISubmissionEntity';
import ICreateSubmissionDTO from '../dtos/ICreateSubmissionDTO';

export default interface ISubmissionsRepository {
  index(): Promise<ISubmissionEntity[]>;
  create(data: ICreateSubmissionDTO): Promise<ISubmissionEntity>;
}
