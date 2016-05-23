# text-writer

ES6 text writer.

# Example

```JavaScript
let TextWriter = require('text-writer');

let text = TextWriter
  .create()
  .write('Lorem ipsum dolor sit amet, ')
  .writeFormat('consectetur %s elit, ', 'adipisicing')
  .writeLine('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  .toString();
```

# Install

Install via npm:

```
npm install text-writer --save
```

# License

MIT