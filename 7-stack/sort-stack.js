var sortStack = function (stack) {
  const temp = [];

  while (stack.length) {
    const top = stack.pop();

    while (!temp.length && temp[temp.length - 1] > top) {
      stack.push(temp.pop());
    }

    temp.push(top);
  }

  return temp;
}