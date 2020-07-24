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
    type_id,
    subject_ids,
    user_id,
    value,
  }: ICreateObservationDTO): Promise<IObservationEntity[]> {
    const observations = await this.observationsRepository.create({
      comment,
      type_id,
      subject_ids,
      user_id,
      value,
    });

    return observations;
  }
}
