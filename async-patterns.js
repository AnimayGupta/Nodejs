const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        console.log(first)
        const second = await readFile('./content/subfolder/second.txt', 'utf8')
        console.log(second)
        await writeFile('./content/result-mind-grenade.txt',`This is an example: ${first}  ${second}`,{flag: 'a'})
    }catch(error){
        console.log(error)
    }
}

start()
// const start = async() => {
//     try{
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         console.log(first)
//         const second = await readFilePromise('./content/subfolder/second.txt', 'utf8')
//         console.log(second)
//         await writeFilePromise('./content/result-mind-grenade.txt',`This is an example: ${first}  ${second}`,{flag: 'a'})
//     }catch(error){
//         console.log(error)
//     }
// }

// start()


// const getText = (path) => {
// return new Promise((resolve,reject) => {
//     readFile(path, 'utf8', (err,data)=>{
//         if(err) {
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })
// }

// getText('./content/first.txt')
//     .then(result => {console.log(result)})
//     .catch(err => {console.log(err)})
