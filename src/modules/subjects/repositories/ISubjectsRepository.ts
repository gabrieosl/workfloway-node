import ISubjectEntity from '../entities/ISubjectEntity';
import ICreateSubjectDTO from '../dtos/ICreateSubjectDTO';

export default interface ISubjectsRepository {
  index(): Promise<ISubjectEntity[]>;
  create(data: ICreateSubjectDTO): Promise<ISubjectEntity>;
}
