const UniqueIdGenerator = require('miniqid');

// * Create an instance of the ID generator
// * You can control the ID structure

const idGenerator = new UniqueIdGenerator({
  prefix: "user_",       // Optional prefix for the ID
  length: 32,            // Total length of the generated ID (any length)
  OnlyLetters: false,     // Use letters (A-Z, a-z)
  OnlyUppercase: false,  // Use uppercase letters (A-Z)
  OnlyLowercase: false,  // Use lowercase letters (a-z)
  OnlyNumbers: false,     // Use numbers (0-9)
  unique: true           // Ensure ID uniqueness
});

//NOTE : When 'unique' is set to false, only numbers or letters (lowercase/uppercase) can be used!

// Generate a unique ID
const uniqueId = idGenerator.generateUniqueId();

console.log(uniqueId);  // Example output: "user_abc123XYZ456789"