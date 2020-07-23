import ITagsEntity from '../entities/ITagEntity';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';
import CreateTagService from './CreateTagService';
import DeleteTagService from './DeleteTagService';
import ListTagsService from './ListTagsService';

let fakeTagsRepository: FakeTagsRepository;
let createTag: CreateTagService;
let deleteTag: DeleteTagService;
let listTags: ListTagsService;

describe('Delete Tag', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();
    createTag = new CreateTagService(fakeTagsRepository);
    deleteTag = new DeleteTagService(fakeTagsRepository);
    listTags = new ListTagsService(fakeTagsRepository);
  });

  it('should be able to delete a tag', async () => {
    const tag = await createTag.execute({
      name: 'some-name',
    });

    await deleteTag.execute(tag.id);

    const tags = await listTags.execute();

    expect(tags).not.toContain(tag);
  });
});
