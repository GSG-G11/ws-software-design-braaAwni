'use strict';

const exercise = require('./exercise.js');

describe('Closures and Scope', function () {
  test('increment', function () {
    expect(exercise.increment(4)).toBe(5, 'Expect increment(4) === 5');
    expect(exercise.increment(99)).toBe(100, 'Expect increment(99) === 100');
    expect(exercise.increment(-1)).toBe(0, 'Expect increment(-1) === 0');
    expect(exercise.increment(-100)).toBe(-99, 'Expect increment(-100) === -99');
    expect(exercise.increment(Infinity)).toBe(Infinity, 'Expect increment(Infinity) === Infinity');
  });

  test('createIncrementer', function () {
    const incBy3 = exercise.createIncrementer(3);
    const incBy2 = exercise.createIncrementer(2);
    const decBy1 = exercise.createIncrementer(-1);

    expect(incBy3(5)).toBe(8);
    expect(incBy3(-1)).toBe(2);
    expect(incBy3(-0)).toBe(3);
    expect(incBy2(19)).toBe(21);
    expect(incBy2(-43)).toBe(-41);
    expect(incBy2(Infinity)).toBe(Infinity);
    expect(decBy1(-4)).toBe(-5);
    expect(decBy1(0)).toBe(-1);
    expect(decBy1(5)).toBe(4);
  });

  test('createCounter', function () {
    const c1 = exercise.createCounter();
    const c2 = exercise.createCounter();
    const c3 = exercise.createCounter();

    // Initial state
    expect(c1.read()).toBe(0);
    expect(c2.read()).toBe(0);
    expect(c3.read()).toBe(0);

    // Increments are independent
    c1.inc();
    expect(c1.read()).toBe(1);
    expect(c2.read()).toBe(0);
    expect(c3.read()).toBe(0);

    // Decrements are independent
    c3.dec();
    expect(c1.read()).toBe(1);
    expect(c2.read()).toBe(0);
    expect(c3.read()).toBe(-1);

    // Operations stack
    c2.inc();
    c2.inc();
    c2.inc();
    c2.dec();
    expect(c1.read()).toBe(1);
    expect(c2.read()).toBe(2);
    expect(c3.read()).toBe(-1);

  });
});
