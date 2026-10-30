function greet(name) {
  if (!name) return 'Hello, world!';
  return `Hello, ${name}!`;
}
function farewell(name) {
  return name ? `Goodbye, ${name}!` : 'Goodbye!';
}
module.exports = { greet, farewell };
