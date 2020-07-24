import IObservationEntity from '../entities/IObservationEntity';
import ICreateObservationDTO from '../dtos/ICreateObservationDTO';
import IUpdateObservationDTO from '../dtos/IUpdateObservationDTO';

export default interface IObservationsRepository {
  index(): Promise<IObservationEntity[]>;
  create(data: ICreateObservationDTO): Promise<IObservationEntity[]>;
  delete(observation_id: string): Promise<boolean>;
  save(data: IObservationEntity): Promise<IObservationEntity>;
  findById(id: string): Promise<IObservationEntity | undefined>;
  findByUserId(userId: string): Promise<IObservationEntity[]>;
}
