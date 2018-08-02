#!/usr/bin/env node

// Command line interfacing library
const program = require('commander');

// Require photoAlbum.js file and extract functions using JS destructuring assignment
const { getByAlbumId } = require('./photoAlbum');

// Set variables in our program
program
  .version('0.0.1')
  .description('Photo Album Display');

// Define our command
program
  .command('id <albumId>')
  .description('Query by id')
  .action(albumId => {
    getByAlbumId(albumId)
    .then(response => {
          // Print photo album content for each photo
          response.forEach(photo => {
            // '[ id ] title'
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