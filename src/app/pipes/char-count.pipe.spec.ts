import { CharCountPipe } from './char-count.pipe';

describe('CharCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CharCountPipe();
    expect(pipe).toBeTruthy();
  });
});
