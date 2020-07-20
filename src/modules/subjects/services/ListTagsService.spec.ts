import ITagsEntity from '../entities/ITagEntity';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';
import ListTagsService from './ListTagsService';

let fakeTagsRepository: FakeTagsRepository;
let listTags: ListTagsService;

describe('List Tags', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();
    listTags = new ListTagsService(fakeTagsRepository);
  });

  it('should be able to list tags', async () => {
    expect(await listTags.execute()).toBeInstanceOf(Array);
  });
});
