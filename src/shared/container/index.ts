import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers/CacheProvider';
import './providers/MailTemplateProvider';
import './providers/MailProvider';

import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import SubjectsRepository from '@modules/subjects/infra/typeorm/repositories/SubjectsRepository';

import ITagsRepository from '@modules/subjects/repositories/ITagsRepository';
import TagsRepository from '@modules/subjects/infra/typeorm/repositories/TagsRepository';

import IObservationTypesRepository from '@modules/observations/repositories/IObservationTypesRepository';
import ObservationTypesRepository from '@modules/observations/infra/typeorm/repositories/ObservationTypesRepository';

import IObservationsRepository from '@modules/observations/repositories/IObservationsRepository';
import ObservationsRepository from '@modules/observations/infra/typeorm/repositories/ObservationsRepository';

import IWorkflowsRepository from '@modules/workflows/repositories/IWorkflowsRepository';
import WorkflowsRepository from '@modules/workflows/infra/typeorm/repositories/WorkflowsRepository';

import ISelectionsRepository from '@modules/selections/repositories/ISelectionsRepository';
import SelectionsRepository from '@modules/selections/infra/typeorm/repositories/SelectionsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<ISubjectsRepository>(
  'SubjectsRepository',
  SubjectsRepository
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IObservationTypesRepository>(
  'ObservationTypesRepository',
  ObservationTypesRepository
);

container.registerSingleton<IObservationsRepository>(
  'ObservationsRepository',
  ObservationsRepository
);

container.registerSingleton<IWorkflowsRepository>(
  'WorkflowsRepository',
  WorkflowsRepository
);

container.registerSingleton<ISelectionsRepository>(
  'SelectionsRepository',
  SelectionsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
);
