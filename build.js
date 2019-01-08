let path = require('path')
let yargs = require('yargs')

let argv = yargs.argv
let input = argv.input || argv.i

if (!input) {
  console.error('I can\'t do my thing without an input file or folder. Specify one after "--input"')
  process.exit(1)
}

let outputFolder = argv.output || argv.o || 'dist'
let fileExtension = path.extname(input.toLowerCase())

switch (fileExtension) {
  case '.html':
    require('./lib/transform-html')(input, outputFolder)
    break
  case '.css':
    console.log('todo css')
    // create a do-nothing web component
    // output the css
    break
  default:
    console.error(`Unsupported input file extension, ${fileExtension}`)
    process.exit(1)
}
