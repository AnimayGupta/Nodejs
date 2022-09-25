const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

//console.log(first,second)

writeFileSync('./content/result-sync.txt', `hello here is the result : ${first} ${second}...`, {flag: 'a'}) 