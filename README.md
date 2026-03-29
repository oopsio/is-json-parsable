# is-json-parsable

## A lightweight and efficient utility to check if a string is a valid, parsable JSON object or array.

## Installation

```bash
npm install is-json-parsable
```

---

## Usage

```javascript
import isJsonParsable from "is-json-parsable";

// Valid JSON
isJsonParsable('{"name": "Alice"}'); // true
isJsonParsable("[1, 2, 3]"); // true

// Invalid JSON
isJsonParsable("Hello World"); // false
isJsonParsable('{name: "Alice"}'); // false (missing quotes on key)
isJsonParsable('{"name": "Alice",}'); // false (trailing comma)
isJsonParsable(123); // false (not a string)
```

## License

Copyright (c) 2026-present, **oopsio**. Released under the **MIT License**.
