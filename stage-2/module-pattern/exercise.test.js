'use strict';

const exercise = require('./exercise.js');

describe('Module Pattern', function () {
  test('UrlParser', function () {
    const { UrlParser } = exercise;
    const url = 'https://example.com/hello?foo=1&bar=2';

    expect(typeof UrlParser).toBe('object', 'Expect module to be object');
    expect(typeof UrlParser.protocol).toBe('function', 'Expect protocol method');
    expect(typeof UrlParser.domain).toBe('function', 'Expect domain method');
    expect(typeof UrlParser.path).toBe('function', 'Expect path method');
    expect(typeof UrlParser.querystring).toBe('function', 'Expect querystring method');

    expect(UrlParser.protocol(url)).toBe('https');
    expect(UrlParser.domain(url)).toBe('example.com');
    expect(UrlParser.path(url)).toBe('hello');
    expect(UrlParser.querystring(url)).toBe('foo=1&bar=2');
  });

  test('createUrlBuilder', function () {
    const { createUrlBuilder } = exercise;
    const host = 'https://example.com';
    const urlBuilder = createUrlBuilder(host);

    expect(typeof urlBuilder).toBe('function', 'Expect URL builder to be a function');
    expect(
      urlBuilder({ path: 'hello', query: { foo: 1, bar: 2 } })).toBe(
      `${host}/hello?foo=1&bar=2`,
      'Expect call to URL builder to build full URL'
    );
    expect(urlBuilder.path('hello')).toBe(`${host}/hello`);
    expect(urlBuilder.query({ foo: 1, bar: 2 })).toBe(`${host}?foo=1&bar=2`);
  });
});
