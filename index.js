

const program = require('commander');

// Require photoAlbum.js file and extract controller functions using JS destructuring assignment
const { query } = require('./photoAlbum');

program
  .version('0.0.1')
  .description('Photo Album Display');

program
  .command('query <albumId>')
  .alias('q')
  .description('Query for an album')
  .action(albumId => query(albumId));


// Assert that a VALID command is provided 
if (!process.argv.slice(2).length) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv)