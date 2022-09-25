const { readFile, writeFile } = require('fs')

var content = ''
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    var content = result
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        content += result
        content += '...'
        writeFile('./content/result-async.txt', content, { flag: 'a' }, (err, result) => {})
    })
})
