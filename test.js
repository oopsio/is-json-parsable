const isJsonParsable = require('./index.js'); // Assuming your file is named index.js

const tests = [
  // --- Should be TRUE ---
  { input: '{"name": "Gemini"}', expected: true, label: "Simple Object" },
  { input: '[1, 2, 3]', expected: true, label: "Simple Array" },
  { input: '{"age": 11, "city": "Bengaluru"}', expected: true, label: "Object with numbers" },
  { input: '[]', expected: true, label: "Empty Array" },
  { input: '{}', expected: true, label: "Empty Object" },

  // --- Should be FALSE ---
  { input: 'Hello World', expected: false, label: "Plain String" },
  { input: 12345, expected: false, label: "Number type" },
  { input: '{ "missing_bracket"', expected: false, label: "Broken Object" },
  { input: '[1, 2, 3,]', expected: false, label: "Trailing Comma" },
  { input: '{ name: "no quotes" }', expected: false, label: "Unquoted Key" },
  { input: 'a', expected: false, label: "Single Character" },
  { input: null, expected: false, label: "Null Value" }
];

console.log("--- Starting Tests ---");

let passed = 0;

tests.forEach(test => {
  const result = isJsonParsable(test.input);
  if (result === test.expected) {
    console.log(`PASS: ${test.label}`);
    passed++;
  } else {
    console.log(`FAIL: ${test.label} (Expected ${test.expected}, got ${result})`);
  }
});

console.log("-----------------------");
console.log(`Results: ${passed}/${tests.length} tests passed.`);