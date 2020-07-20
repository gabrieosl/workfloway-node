import 'reflect-metadata';

import IWorkflowsEntity from '../schemas/IWorkflowSchema';
import FakeWorkflowsRepository from '../repositories/fakes/FakeWorkflowsRepository';
import CreateWorkflowService from './CreateWorkflowService';

let fakeWorkflowsRepository: FakeWorkflowsRepository;
let createWorkflow: CreateWorkflowService;

describe('Create Workflow', () => {
  beforeEach(() => {
    fakeWorkflowsRepository = new FakeWorkflowsRepository();
    createWorkflow = new CreateWorkflowService(fakeWorkflowsRepository);
  });

  it('should be able to create a workflow', async () => {
    const workflow = await createWorkflow.execute({
      name: 'test',
      content: [{}, {}],
    });

    expect(workflow).toHaveProperty('id');
  });
});
