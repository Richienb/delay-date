/**
Delay a promise until a specified date.
@param date The date to wait for.
@example
```
const addTime = require("add-time");
const delayDate = require("delay-date");

bar();

await delayDate(addTime.now({ seconds: 1 }));

// Executed a second later
baz();
```
*/
declare function delayDate(date: Date | string | number): Promise<void>

export = delayDate
