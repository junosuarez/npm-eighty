var eighty = function (opt) {
  if (!(this instanceof eighty)) {
    return new eighty(opt);
  }
  this.opts = {
    hrchar: '—',
    quotechar: '▎',
    width: 80,
    wordDelimiter: /[ \t]+/
  };
};

eighty.prototype.hr = function (char) {
  return this.pad('', char || this.opts.hrchar, this.opts.width);
};

eighty.prototype.blockquote = function (text) {
  var self = this;
  var lines = this.wordWrap(text, this.opts.width - 3);
  return lines.map(function (line) {
    return ' ' + self.opts.quotechar + ' ' + line;
  }).join('\n');
};

eighty.prototype.pad = function (str, fillChar, width, alignment) {
  alignment = alignment || 'left';
  var fillLength = width - str.length;
  if (fillLength <= 0) {
    return str;
  }
  var filler = Array(fillLength + 1).join(fillChar);
  switch (alignment) {
    case 'left':
    return str + filler;
    case 'right':
    return filler + str;
    case 'center':
      var pre = Math.ceil(fillLength / 2);
      var post = fillLength - pre;
    return filler.substr(0,pre) + str + filler.substr(0,post);
  }
};

eighty.prototype.wrap = function (text, width) {
  width = width || this.opts.width;
  var lines = [];
  var len = text.length;
  for (var i = 0; i < len;) {
    lines.push(text.substr(i, width));
    i+= width;
  }
  return lines;
};

eighty.prototype.wordWrap = function (text, width) {
  width = width || this.opts.width;
  var lines = [];
  var words = text.split(this.opts.wordDelimiter);
  var line = '';
  while (words.length > 0) {
    var parts = words.shift().split('\n');
    for (var i = 0, len = parts.length; i < len; i++) {
      var word = parts[i];
      if (word === '') {
        lines.push(line);
        lines.push(word);
        line = word;
      } else if ((line.length + 1 + word.length) < width) {
        line = (line.length > 0 ? line + ' ' : line) + word;
      } else {
        lines.push(line);
        line = word;
      }
    }
  }
  lines.push(line);
  return lines;
};

var defaultInstance = eighty();
defaultInstance.configure = eighty;

module.exports = defaultInstance;