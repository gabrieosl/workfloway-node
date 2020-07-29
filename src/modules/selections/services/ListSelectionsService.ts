import { injectable, inject } from 'tsyringe';

import ISelectionsRepository from '../repositories/ISelectionsRepository';
import ISelectionEntity from '../schemas/ISelectionSchema';

@injectable()
export default class ListSelectionsService {
  constructor(
    @inject('SelectionsRepository')
    private selectionsRepository: ISelectionsRepository
  ) {}

  public async execute(size = 15, page = 1): Promise<ISelectionEntity[]> {
    const selections = await this.selectionsRepository.index(size, page);

    return selections;
  }
}
