import { uuid } from 'uuidv4';

import ISelectionsRepository from '../ISelectionsRepository';
import ICreateSelectionDTO from '@modules/selections/dtos/ICreateSelectionDTO';
import IUpdateSelectionDTO from '@modules/selections/dtos/IUpdateSelectionDTO';
import ISelection from '@modules/selections/schemas/ISelectionSchema';
import { ObjectID } from 'mongodb';

export default class FakeSelectionsRepository implements ISelectionsRepository {
  private selections: ISelection[] = [];

  public async index(): Promise<ISelection[]> {
    return this.selections;
  }

  public async create({
    name,
    content,
  }: ICreateSelectionDTO): Promise<ISelection> {
    const selection = {} as ISelection;

    Object.assign(selection, { id: new ObjectID(), name, content });

    this.selections.push(selection);

    return selection;
  }

  public async findById(id: string): Promise<ISelection | undefined> {
    const _id = ObjectID.createFromHexString(id);
    return this.selections.find(wf => wf.id === _id);
  }

  public async update(
    id: string,
    { name, content }: IUpdateSelectionDTO
  ): Promise<ISelection> {
    const _id = ObjectID.createFromHexString(id);
    const index = this.selections.findIndex(wf => wf.id === _id);
    // Object.assign(this.selections[index], { name, content });

    return this.selections[index];
  }

  public async delete(selection_id: ObjectID): Promise<boolean> {
    const obsType = this.selections.findIndex(
      obsType => obsType.id === selection_id
    );

    if (obsType) {
      this.selections.splice(obsType, 1);
      return true;
    }
    return false;
  }
}
