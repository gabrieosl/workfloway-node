import { injectable, inject } from 'tsyringe';

import IObservationsRepository from '../repositories/IObservationsRepository';
import IObservationEntity from '../entities/IObservationEntity';
import ICreateObservationDTO from '../dtos/ICreateObservationDTO';

@injectable()
export default class CreateObservationService {
  constructor(
    @inject('ObservationsRepository')
    private observationsRepository: IObservationsRepository
  ) {}

  public async execute({
    comment,
    submission_id,
    type_id,
    value,
  }: ICreateObservationDTO): Promise<IObservationEntity> {
    const observation = await this.observationsRepository.create({
      comment,
      submission_id,
      type_id,
      value,
    });

    return observation;
  }
}
