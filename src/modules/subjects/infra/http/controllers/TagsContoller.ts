import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTagsService from '@modules/subjects/services/ListTagsService';
import CreateTagService from '@modules/subjects/services/CreateTagService';

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
}
