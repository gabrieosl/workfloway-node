import IObservationTypeEntity from '../entities/IObservationTypeEntity';
import ICreateObservationTypeDTO from '../dtos/ICreateObservationTypeDTO';
import IUpdateObservationTypeDTO from '../dtos/IUpdateObservationTypeDTO';

export default interface IObservationTypesRepository {
  index(): Promise<IObservationTypeEntity[]>;
  create(data: ICreateObservationTypeDTO): Promise<IObservationTypeEntity>;
  delete(observationType_id: string): Promise<boolean>;
  update(data: IUpdateObservationTypeDTO): Promise<IObservationTypeEntity>;
}
