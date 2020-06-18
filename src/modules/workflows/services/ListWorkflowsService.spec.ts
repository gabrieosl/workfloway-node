import 'reflect-metadata';

import IWorkflowsEntity from '../schemas/IWorkflowSchema';
import FakeWorkflowsRepository from '../repositories/fakes/FakeWorkflowsRepository';
import ListWorkflowsService from './ListWorkflowsService';

let fakeWorkflowsRepository: FakeWorkflowsRepository;
let listWorkflows: ListWorkflowsService;

describe('List Workflows', () => {
  beforeEach(() => {
    fakeWorkflowsRepository = new FakeWorkflowsRepository();
    listWorkflows = new ListWorkflowsService(fakeWorkflowsRepository);
  });

  it('should be able to list workflows', async () => {
    const workflow = await fakeWorkflowsRepository.create({
      name: 'SOME-WORKFLOW',
      content: [{}, {}],
    });

    const workflows = await listWorkflows.execute();
    expect(await listWorkflows.execute()).toEqual([workflow]);
  });
});
