# delay-date [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/delay-date/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/delay-date)

Delay a promise until a specified date.

[![NPM Badge](https://nodei.co/npm/delay-date.png)](https://npmjs.com/package/delay-date)

## Install

```sh
npm install delay-date
```

## Usage

```js
const addTime = require("add-time");
const delayDate = require("delay-date");

bar();

await delayDate(addTime.now({ seconds: 1 }));

// Executed a second later
baz();
```

## API

### delayDate(date)

#### date

Type: `Date | string | number`

The date to wait for.
