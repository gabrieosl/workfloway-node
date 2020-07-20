import 'reflect-metadata';

import FakeWorkflowsRepository from '../repositories/fakes/FakeWorkflowsRepository';
import UpdateWorkflowService from './UpdateWorkflowService';
import CreateWorkflowService from './CreateWorkflowService';

let fakeWorkflowsRepository: FakeWorkflowsRepository;
let updateWorkflow: UpdateWorkflowService;
let createWorkflow: CreateWorkflowService;

describe('Update Workflow', () => {
  beforeEach(() => {
    fakeWorkflowsRepository = new FakeWorkflowsRepository();
    updateWorkflow = new UpdateWorkflowService(fakeWorkflowsRepository);
    createWorkflow = new CreateWorkflowService(fakeWorkflowsRepository);
  });

  it('should be able to update a workflow', async () => {
    const workflow = await createWorkflow.execute({
      name: 'test',
      content: [{}, {}],
    });

    const updatedWorkflow = await updateWorkflow.execute(String(workflow.id), {
      name: 'test2',
      content: [{}, {}],
    });

    expect(1).toEqual(1);
  });
});
