import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'joao',
      email: 'joao@gabrieosl.com',
    });

    expect(updatedUser.name).toBe('joao');
    expect(updatedUser.email).toBe('joao@gabrieosl.com');
  });

  it('should not be able to update the profile for non existing user', async () => {
    expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'joao',
        email: 'joao@gabrieosl.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the email to an existing one', async () => {
    await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'joao',
      email: 'joao@gabrieosl.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'joao',
        email: 'gabriel@gabrieosl.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'joao',
      email: 'joao@gabrieosl.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'joao',
        email: 'joao@gabrieosl.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'joao',
        email: 'joao@gabrieosl.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
