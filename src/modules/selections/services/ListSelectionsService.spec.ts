import 'reflect-metadata';

import ISelectionsEntity from '../schemas/ISelectionSchema';
import FakeSelectionsRepository from '../repositories/fakes/FakeSelectionsRepository';
import ListSelectionsService from './ListSelectionsService';

let fakeSelectionsRepository: FakeSelectionsRepository;
let listSelections: ListSelectionsService;

describe('List Selections', () => {
  beforeEach(() => {
    fakeSelectionsRepository = new FakeSelectionsRepository();
    listSelections = new ListSelectionsService(fakeSelectionsRepository);
  });

  it('should be able to list selections', async () => {
    const selection = await fakeSelectionsRepository.create({
      id: 'some-id',
      name: 'SOME-WORKFLOW',
      content: ['some-id-1', 'some-id-2'],
    });

    const selections = await listSelections.execute();
    expect(await listSelections.execute()).toEqual([selection]);
  });
});
