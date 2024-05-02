import { HTTPError } from './httperror';

describe('HTTPError', () => {
  it('should create an instance', () => {
    expect(new HTTPError()).toBeTruthy();
  });
});
