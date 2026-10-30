const { greet } = require('../src/greeting');
test('greets by name', () => { expect(greet('Ada')).toBe('Hello, Ada!'); });
test('greets the world by default', () => { expect(greet()).toBe('Hello, world!'); });
const { farewell } = require('../src/greeting');
test('says goodbye by name', () => { expect(farewell('Ada')).toBe('Goodbye, Ada!'); });
test('says goodbye', () => { expect(farewell()).toBe('Goodbye!'); });
