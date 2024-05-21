import { UnautherizedError } from './unautherized-error';

describe('UnautherizedError', () => {
  it('should create an instance', () => {
    expect(new UnautherizedError()).toBeTruthy();
  });
});
