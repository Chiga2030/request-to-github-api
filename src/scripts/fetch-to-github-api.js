

let parser = document.createElement('a');
parser.href = 'https://api.github.com/users/chiga2030';
const username = ...parser.pathname.split('/users/').filter((arr) => !!arr);


//console.log(parser.protocol); // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.search;   // => "?search=test"
parser.hash;     // => "#hash"
parser.host;     // => "example.com:3000"