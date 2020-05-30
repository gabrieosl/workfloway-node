import { injectable, inject } from 'tsyringe';

import IRepetitionsRepository from '../repositories/IRepetitionsRepository';
import IRepetitionEntity from '../entities/IRepetitionEntity';
import ICreateRepetitionDTO from '../dtos/ICreateRepetitionDTO';

@injectable()
export default class CreateRepetitionService {
  constructor(
    @inject('RepetitionsRepository')
    private repetitionsRepository: IRepetitionsRepository
  ) {}

  public async execute({
    count,
    vehicle,
    subject_id,
    customer,
  }: ICreateRepetitionDTO): Promise<IRepetitionEntity> {
    const repetition = await this.repetitionsRepository.create({
      count,
      vehicle,
      subject_id,
      customer,
    });

    return repetition;
  }
}
