import ISubjectEntity from '../entities/ISubjectEntity';
import ICreateSubjectDTO from '../dtos/ICreateSubjectDTO';

export default interface ISubjectsRepository {
  index(
    size: number,
    page: number,
    includeObservations: boolean,
    filters: {
      [key: string]: string[] | string[][];
    }
  ): Promise<ISubjectEntity[]>;
  create(data: ICreateSubjectDTO): Promise<ISubjectEntity[]>;
}
