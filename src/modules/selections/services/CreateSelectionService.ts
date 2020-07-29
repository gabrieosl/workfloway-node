import { injectable, inject } from 'tsyringe';

import ISelectionsRepository from '../repositories/ISelectionsRepository';
import ISelectionSchema from '../schemas/ISelectionSchema';
import ICreateSelectionDTO from '../dtos/ICreateSelectionDTO';

@injectable()
export default class CreateSelectionService {
  constructor(
    @inject('SelectionsRepository')
    private SelectionsRepository: ISelectionsRepository
  ) {}

  public async execute({
    id,
    name,
    content,
  }: ICreateSelectionDTO): Promise<ISelectionSchema> {
    const Selection = await this.SelectionsRepository.create({
      id,
      name,
      content,
    });

    return Selection;
  }
}
