import IObservationEntity from '../entities/IObservationEntity';
import ICreateObservationDTO from '../dtos/ICreateObservationDTO';

export default interface IObservationsRepository {
  index(): Promise<IObservationEntity[]>;
  create(data: ICreateObservationDTO): Promise<IObservationEntity>;
  delete(observation_id: string): Promise<boolean>;
}
