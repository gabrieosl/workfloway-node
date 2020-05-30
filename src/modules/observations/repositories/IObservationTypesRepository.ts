import IObservationTypeEntity from '../entities/IObservationTypeEntity';
import ICreateObservationTypeDTO from '../dtos/ICreateObservationTypeDTO';

export default interface IObservationTypesRepository {
  index(): Promise<IObservationTypeEntity[]>;
  create(data: ICreateObservationTypeDTO): Promise<IObservationTypeEntity>;
  delete(observationType_id: string): Promise<boolean>;
}
