# isitfriday

![isitfriday](assets/isitfriday.gif)

Is it friday?

[![Build Status](https://travis-ci.org/rkrupinski/isitfriday.png?branch=master)](https://travis-ci.org/rkrupinski/isitfriday)

## Installation

```sh
yarn add isitfriday
```

## Usage

```typescript
interface IIsItFriday {
  (today?: Date): boolean;
}
```

Programmatic:

```js
const isitfriday = require('isitfriday').default;

console.log(isitfriday());
console.log(isitfriday(new Date(1492774739871)));
```

CLI:

```sh
yarn global add isitfriday

isitfriday
```
