import { injectable, inject } from 'tsyringe';

import IObservationsRepository from '../repositories/IObservationsRepository';
import IObservationEntity from '../entities/IObservationEntity';
import IUpdateObservationDTO from '../dtos/IUpdateObservationDTO';

@injectable()
export default class UpdateObservationService {
  constructor(
    @inject('ObservationsRepository')
    private observationsRepository: IObservationsRepository
  ) {}

  public async execute({
    id,
    comment,
    type_id,
    value,
  }: IUpdateObservationDTO): Promise<IObservationEntity> {
    const observation = await this.observationsRepository.findById(id);

    if (observation) {
      if (comment) {
        observation.comment = comment;
      }
      if (type_id) {
        observation.type_id = type_id;
      }
      if (value) {
        observation.value = value;
      }

      await this.observationsRepository.save(observation);

      return observation;
    }

    return {} as IObservationEntity;
  }
}
