# Hash Data Manager

A simple module for handling data in the URL hash. This module provides functions to load and save data from/to the URL hash.

[Demo](https://unpkg.com/hash-data-manager@0.0.3/demo.html)

## Installation

You can install the module using npm:

```bash
npm install hash-data-manager
```

## Usage

```js
import { load, save } from 'hash-data-manager';

// Example: Load data from the URL hash
const loadedData = load();
if (loadedData) {
  console.log('Loaded data:', loadedData);
} else {
  console.log('No data found in the URL hash.');
}

// Example: Save data to the URL hash
const dataToSave = { key: 'value' };
save(dataToSave);
console.log('Data saved to the URL hash.');
```
