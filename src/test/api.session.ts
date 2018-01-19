import myFunction from '../api';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = myFunction();
    expect(result).to.equal('Hello World!');
  });
});
