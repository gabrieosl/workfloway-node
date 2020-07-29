import 'reflect-metadata';

import ISelectionsEntity from '../schemas/ISelectionSchema';
import FakeSelectionsRepository from '../repositories/fakes/FakeSelectionsRepository';
import CreateSelectionService from './CreateSelectionService';

let fakeSelectionsRepository: FakeSelectionsRepository;
let createSelection: CreateSelectionService;

describe('Create Selection', () => {
  beforeEach(() => {
    fakeSelectionsRepository = new FakeSelectionsRepository();
    createSelection = new CreateSelectionService(fakeSelectionsRepository);
  });

  it('should be able to create a Selection', async () => {
    const Selection = await createSelection.execute({
      id: 'some-id',
      name: 'test',
      content: ['some-id-1', 'some-id-2'],
    });

    expect(Selection).toHaveProperty('id');
  });
});
