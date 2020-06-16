import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendMailForgotPasswordService from './SendMailForgotPasswordService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeMailProvider: FakeMailProvider;
let sendMailForgotPasswordService: SendMailForgotPasswordService;

describe('SendMailForgotPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();
    sendMailForgotPasswordService = new SendMailForgotPasswordService(
      fakeUsersRepository,
      fakeUserTokensRepository,
      fakeMailProvider,
    );
  });

  it('should be able to recover the password using email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    await sendMailForgotPasswordService.execute({
      email: 'gabriel@gabrieosl.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendMailForgotPasswordService.execute({
        email: 'gabriel@gabrieosl.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gabriel@gabrieosl.com',
      password: '123456',
    });

    await sendMailForgotPasswordService.execute({
      email: 'gabriel@gabrieosl.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
