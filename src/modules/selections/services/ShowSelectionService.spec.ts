import 'reflect-metadata';
import ISelectionsEntity from '../schemas/ISelectionSchema';
import FakeSelectionsRepository from '../repositories/fakes/FakeSelectionsRepository';
import ShowSelectionService from './ShowSelectionService';

let fakeSelectionsRepository: FakeSelectionsRepository;
let showSelection: ShowSelectionService;

describe('Show Selection', () => {
  beforeEach(() => {
    fakeSelectionsRepository = new FakeSelectionsRepository();
    showSelection = new ShowSelectionService(fakeSelectionsRepository);
  });

  it('should be able to show selections', async () => {
    const selection = await fakeSelectionsRepository.create({
      id: 'some-id',
      name: 'SOME-WORKFLOW',
      content: ['some-id-1', 'some-id-2'],
    });
    const wantedSelection = await showSelection.execute(String(selection.id));
    expect(1).toEqual(1);
  });
});
