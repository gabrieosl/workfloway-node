import ITagsEntity from '../entities/ITagEntity';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';
import CreateTagService from './CreateTagService';

let fakeTagsRepository: FakeTagsRepository;
let createTag: CreateTagService;

describe('Create Tag', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();
    createTag = new CreateTagService(fakeTagsRepository);
  });

  it('should be able to create a tag', async () => {
    const tag = await createTag.execute({
      name: 'some-name',
    });

    expect(tag).toHaveProperty('id');
  });
});
