# miniqid

`miniqid` is a flexible and easy-to-use unique ID generator for Node.js. It allows you to generate unique IDs with customizable options such as length, prefix, and character set.

## Features

- Generate unique IDs with customizable length and prefix.
- Ensure uniqueness across processes and machines.
- Support for different character sets:
  - Letters (uppercase, lowercase, or both)
  - Numbers
  - Alphanumeric
- Lightweight and easy to integrate.

## Installation

```bash
npm install miniqid
```

## Usage

```javascript

const UniqueIdGenerator = require('miniqid');

// * Create an instance of the ID generator
// * You can control the ID structure

const idGenerator = new UniqueIdGenerator({
  prefix: "user_",           // Optional prefix for the ID
  length: 32,                // Total length of the generated ID (any length ex : 100 )
  OnlyLetters: false,        // Use  Only letters (A-Z, a-z)
  OnlyUppercase: false,      // Use  Only uppercase letters (A-Z)
  OnlyLowercase: false,      // Use  Only lowercase letters (a-z)
  OnlyNumbers: false,        // Use  Only numbers (0-9)
  unique: true               // Ensure ID uniqueness
});

// NOTE : When 'unique' is set to false, only numbers or letters (lowercase/uppercase) can be used!

// Generate a unique ID

const uniqueId = idGenerator.generateUniqueId();

console.log(uniqueId);  // Example output: "user_abc123XYZ456789"

## Options

The `UniqueIdGenerator` constructor accepts the following options:

| Option         | Type    | Default   | Description                                                                |
|----------------|---------|-----------|----------------------------------------------------------------------------|
| `prefix`       | String  | `""`      | A string to prepend to the generated ID. (Optional)                        |
| `length`       | Number  | `24`      | The total length of the generated ID , including the prefix (any length)   |
| `unique`       | Boolean | `true`    | Ensures ID uniqueness across processes and machines.                       |
| `OnlyLetters`  | Boolean | `false`   | If `true`, generates IDs with  Only letters (A-Z, a-z).                    |
| `OnlyUppercase`| Boolean | `false`   | If `true`, generates IDs with  Only uppercase letters (A-Z).               |
| `OnlyLowercase`| Boolean | `false`   | If `true`, generates IDs with  Only lowercase letters (a-z).               |
| `OnlyNumbers`  | Boolean | `false`   | If `true`, generates IDs with  Only numbers (0-9).                         |

