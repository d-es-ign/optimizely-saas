import formatBytes from './formatBytes';

describe('remove object keys', () => {
  it('is able to convert values up to yottabytes', () => {
    expect(formatBytes(1208925819614629174706176, 0)).toEqual('1yb');
  });
  it('is unable to convert values bigger than 1024 yottabyte (a ronnabyte)', () => {
    expect(formatBytes(1208925819614629174706176 * 1025, 0)).toEqual(undefined);
  });
  it('Should return the value with the given amount of decimal places', () => {
    expect(formatBytes(1234567898765432, 10)).toEqual('1.0965165653pb');
  });
});
