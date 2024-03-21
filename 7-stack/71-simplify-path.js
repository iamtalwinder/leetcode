/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const components = path.split('/');
  const stack = [];

  for (const component of components) {
    if (component === '.' || component === '') {
      continue;
    }

    if (component === '..') {
      stack.pop();
    } else {
      stack.push(component);
    }
  }

  return '/' + stack.join('/');
};