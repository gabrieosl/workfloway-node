import { container } from 'tsyringe';

// import '@modules/users/providers';
// import './providers';

import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import SubjectsRepository from '@modules/subjects/infra/typeorm/repositories/SubjectsRepository';

import IObservationTypesRepository from '@modules/observations/repositories/IObservationTypesRepository';
import ObservationTypesRepository from '@modules/observations/infra/typeorm/repositories/ObservationTypesRepository';

import IWorkflowsRepository from '@modules/workflows/repositories/IWorkflowsRepository';
import WorkflowsRepository from '@modules/workflows/infra/typeorm/repositories/WorkflowsRepository';

// import IUsersRepository from '@modules/users/repositories/IUsersRepository';
// import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// // import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
// // import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<ISubjectsRepository>(
  'SubjectsRepository',
  SubjectsRepository
);

container.registerSingleton<IObservationTypesRepository>(
  'ObservationTypesRepository',
  ObservationTypesRepository
);

container.registerSingleton<IWorkflowsRepository>(
  'WorkflowsRepository',
  WorkflowsRepository
);

// container.registerSingleton<IUsersRepository>(
//   'UsersRepository',
//   UsersRepository,
// );
