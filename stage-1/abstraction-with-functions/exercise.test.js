'use strict';

const exercise = require('./exercise.js');

describe('Abstraction with Functions', function () {
  test('capitaliseObjectKeys', () => {
    const input = { foo: 'foo', bar: 'bar' };

    const result = exercise.capitaliseObjectKeys(input);

    expect(result).toEqual({ Foo: 'foo', Bar: 'bar' });
  });

  test('capitaliseObjectValues', () => {
    const input = { foo: 'foo', bar: 'bar' };

    const result = exercise.capitaliseObjectValues(input);

    expect(result).toEqual({ foo: 'Foo', bar: 'Bar' });
  });

  test('incrementObjectValues', () => {
    const input = { foo: 1, bar: 4, baz: -1 };

    const result = exercise.incrementObjectValues(input);

    expect(result).toEqual({ foo: 2, bar: 5, baz: 0 });
  });

  test('reverseObjectKeys', () => {
    const input = { foo: 1, bar: 4, baz: -1 };

    const result = exercise.reverseObjectKeys(input);

    expect(result).toEqual({ oof: 1, rab: 4, zab: -1 });
  });
});
