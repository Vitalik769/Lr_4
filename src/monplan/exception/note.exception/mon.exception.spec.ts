import { MonsException } from './mon.exception';

describe('MonsException', () => {
  it('should be defined', () => {
    expect(new MonsException()).toBeDefined();
  });
});
