const isJsonParsable = require('../dist/index.js');

const durationSeconds = 10; 
const testCases = [
  { name: "Valid JSON", input: '{"status":"ok","code":200}' },
  { name: "Invalid (Fast Fail)", input: 'Not even close' },
  { name: "Invalid (Structural)", input: '{"oops":}' }
];

console.log(`Running Ops/sec Benchmark (${durationSeconds}s per case)`);

testCases.forEach(testCase => {
  let ops = 0;
  const startTime = performance.now();
  const endTime = startTime + (durationSeconds * 1000);

  // Keep running until the time limit is reached
  while (performance.now() < endTime) {
    isJsonParsable(testCase.input);
    ops++;
  }

  const actualDuration = (performance.now() - startTime) / 1000;
  const opsPerSecond = Math.floor(ops / actualDuration);

  console.log(`${testCase.name.padEnd(20)}: ${opsPerSecond.toLocaleString()} ops/s`);
});