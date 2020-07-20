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
    submission_id,
    type_id,
    value,
    user_id,
  }: IUpdateObservationDTO): Promise<IObservationEntity> {
    const observation = await this.observationsRepository.findById(id);

    if (observation) {
      if (comment) {
        observation.comment = comment;
      }
      if (submission_id) {
        observation.submission_id = submission_id;
      }
      if (type_id) {
        observation.type_id = type_id;
      }
      if (value) {
        observation.value = value;
      }
      if (user_id) {
        observation.user_id = user_id;
      }

      await this.observationsRepository.save(observation);

      return observation;
    }

    return {} as IObservationEntity;
  }
}
