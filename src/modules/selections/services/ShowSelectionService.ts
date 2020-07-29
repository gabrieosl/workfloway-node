import { injectable, inject } from 'tsyringe';

import ISelectionsRepository from '../repositories/ISelectionsRepository';
import ISelectionEntity from '../schemas/ISelectionSchema';

@injectable()
export default class ShowSelectionsService {
  constructor(
    @inject('SelectionsRepository')
    private selectionsRepository: ISelectionsRepository
  ) {}

  public async execute(id: string): Promise<ISelectionEntity | undefined> {
    const selection = await this.selectionsRepository.findById(id);
    return selection;
  }
}
