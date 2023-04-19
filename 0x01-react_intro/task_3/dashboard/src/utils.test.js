import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

// Test for getFooterCopy function
describe('getFooterCopy', () => {
  it('should return "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification', () => {
  it('should return a string', () => {
    expect(typeof getLatestNotification()).toEqual('string');
  });

  it('should return a string containing the word "Urgent"', () => {
    expect(getLatestNotification()).toContain('Urgent');
  });
});
