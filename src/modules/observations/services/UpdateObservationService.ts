import { injectable, inject } from 'tsyringe';

import IObservationsRepository from '../repositories/IObservationsRepository';
import IObservationEntity from '../entities/IObservationEntity';
import ICreateObservationDTO from '../dtos/ICreateObservationDTO';

@injectable()
export default class UpdateeObservationService {
  constructor(
    @inject('ObservationsRepository')
    private observationsRepository: IObservationsRepository
  ) {}

  public async execute({
    observation_id,
    comment,
    repetition_id,
    type_id,
    value,
  }: ICreateObservationDTO): Promise<IObservationEntity> {
    const observation = await this.observationsRepository.create({
      comment,
      repetition_id,
      type_id,
      value,
    });

    return observation;
  }
}
