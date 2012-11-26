var eighty = require('./index');

console.log(eighty.hr());

console.log(eighty.wrap('here is some long text blah blah blah', 10).join('\n'));

console.log(eighty.wordWrap('here is some long text blah blah blah', 10).join('\n'));

console.log(eighty.blockquote('here is some long text blah blah blah here is some long text blah blah blah here is some long text blah blah blah here is some long text blah blah blah here is some long text blah blah blah here is some long text blah blah blah here is some long text blah blah blah '));