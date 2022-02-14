/*
 * Exercise: Create some modules!
 *
 * When you think you have finished, run the command:
 *   npm run s2.modules
 * This will run a series of tests which should all pass.
 */
'use strict';

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */
var UrlParser = (function () {
  // fill in ...
  const protocol = (url) =>{
    return url.split(":")[0]
  }
  const domain = (url) =>{
    return url.split("/")[2]
  }
  const path = (url) =>{
    return url.split("/")[3].split("?")[0]
  }
  const querystring = (url) =>{
    return url.split("/")[3].split("?")[1]
  }

  return {
    // a function that takes a URL and returns its protocol
    protocol: protocol,

    // a function that takes a URL and returns its domain
    domain: domain,

    // a function that takes a URL and returns its path
    path: path,

    // a function that takes a URL and returns its query string
    querystring: querystring,
  };

})();



/*
 * Create a module that can support multiple instances (like in our example).
 * The module should be a function with several additional methods attached as
 * attributes.
 *
 * Example:
 * var exampleBuilder = createUrlBuilder('https://example.com');
 *
 * var url = exampleBuilder({ query: { foo: 1, bar: 2 }, path: 'hello' });
 *
 * console.log(url); // https://example.com/hello?foo=1&bar=2
 *
 * exampleBuilder.
 */
var createUrlBuilder = function (host) {
  // fill in ...
// const url = host
//   var builder = function () {
//     const pathUrl = function (path) {
//       return `/${path}`;
//     };
//     const querystring ={foo:1 , bar:2}

//     builder.path = () => url + pathUrl(path);

//     return `${url}${pathUrl}?foo=${querystring.foo}&bar=${querystring.bar}`
//   }

//   return builder;
// }
var builder = function (obj) {
  let path = obj.path || "";
  let query = obj.query || "";

  const pathString = function (path) {
    return `/${path}`;
  };


  const querystring = function (query) {
    let str = "?";
    for (let key in query) {
      str += `${key}=${query[key]}&`;
    }
    return str.slice(0, -1);
  };
  builder.path = () => host + pathString(path);
  builder.query = () => host + querystring(query);
  
  
    return `${host}${path && pathString(path)}${query && querystring(query)}`
    
};

return builder;
};


module.exports = {
  UrlParser,
  createUrlBuilder,
};
