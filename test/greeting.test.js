const { greet } = require('../src/greeting');
test('greets by name', () => { expect(greet('Ada')).toBe('Hello, Ada!'); });
test('greets the world by default', () => { expect(greet()).toBe('Hello, world!'); });
