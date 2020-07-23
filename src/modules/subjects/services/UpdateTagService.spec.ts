import ITagsEntity from '../entities/ITagEntity';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';
import CreateTagService from './CreateTagService';
import UpdateTagService from './UpdateTagService';

let fakeTagsRepository: FakeTagsRepository;
let createTag: CreateTagService;
let updateTag: UpdateTagService;

describe('Update Tag', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();
    createTag = new CreateTagService(fakeTagsRepository);
    updateTag = new UpdateTagService(fakeTagsRepository);
  });

  it('should be able to update a tag', async () => {
    const tag = await createTag.execute({
      name: 'some-name',
    });

    const updatedTag = await updateTag.execute(tag.id, {
      name: 'some-new-name',
    });

    expect(updatedTag?.name).toEqual('some-new-name');
  });
});
