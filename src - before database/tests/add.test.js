const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(32, 4);

  if (result !== 8 ) {
    throw new Error(`You added two numbers 3 and 4. The result was ${result} instead of 7`);
  }
});

const helloName = (name) => `Hello ${name}`;

test('Check if name is shown', () => {
  const name = 'Adam'
  const checkIt = helloName(name);
  expect(checkIt).toBe(`Hello ${name}`)
});
