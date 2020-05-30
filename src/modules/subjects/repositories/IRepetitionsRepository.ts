import IRepetitionEntity from '../entities/IRepetitionEntity';
import ICreateRepetitionDTO from '../dtos/ICreateRepetitionDTO';

export default interface IRepetitionsRepository {
  index(): Promise<IRepetitionEntity[]>;
  create(data: ICreateRepetitionDTO): Promise<IRepetitionEntity>;
}
