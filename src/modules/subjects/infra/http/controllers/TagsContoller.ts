import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTagsService from '@modules/subjects/services/ListTagsService';
import CreateTagService from '@modules/subjects/services/CreateTagService';
import UpdateTagService from '@modules/subjects/services/UpdateTagService';
import DeleteTagService from '@modules/subjects/services/DeleteTagService';

export default class TagsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTags = container.resolve(ListTagsService);

    const size = Number(request.query.size) || 20;
    const page = Number(request.query.page) || 1;

    const tags = await listTags.execute(size, page);

    return response.json(tags);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTag = container.resolve(CreateTagService);

    const tag = await createTag.execute({
      name,
    });

    return response.json(tag);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { targetId } = request.params;
    const { name } = request.body;

    const updateTag = container.resolve(UpdateTagService);

    const updatedTag = await updateTag.execute(targetId, { name });

    return response.json(updatedTag);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { targetId } = request.params;

    const deleteTag = container.resolve(DeleteTagService);

    await deleteTag.execute(targetId);

    return response.status(204).send();
  }
}
