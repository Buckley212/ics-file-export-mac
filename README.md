ics-file-export
============

> Generate .ics file in client.


## installation

```sh
npm install ics-file-export
```

## usage

```js
import { ics } from 'ics-file-export';

const cal = ics();

cal.addEvent(
      'Event Title',
      'Event description',
      'Event location',
      '13/1/2021 5:30 pm', 
      '13/1/2021 6:00 pm')
    );

// initiates download in client
cal.download()
```


Prior Work / Credit
------------------
* [ICS.js](https://github.com/nwcell):
