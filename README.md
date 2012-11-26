# eighty
utility for working with text in a fixed width buffer (like a console)

## Installation

    $ npm install eighty

## Usage
You probably shouldn't quite yet. YMMV.

    var eighty = require('eighty');

    eighty = eighty.configure({ width: 40 });

    eighty.wordWrap('ah, distinctly I remember it was in the bleak December and each seperate dying ember wrought its ghost upon the floor');

## license
MIT. (c) 2012 jden - Jason Denizac <jason@denizac.org>