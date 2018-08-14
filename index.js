#!/usr/bin/env node
const program = require('commander');
const { getByAlbumId } = require('./photoAlbum');
var pjson = require('./package.json');

// Set variables in our program
program
  .version(pjson.version)
  .description(pjson.description);

// Define our command
program
  .command('id <albumId>')
  .description('Query by id')
  .action(albumId => {
    getByAlbumId(albumId)
    .then(response => {
          // Print photo album content for each photo
          response.forEach(photo => {
            console.log("[" + photo.id + "] " + photo.title);
          });
        })
      })

// Make sure we have some commands provided 
if (!process.argv.slice(2).length) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv);