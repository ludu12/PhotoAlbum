
// Promise HTTP client
const axios = require('axios');

// Get by album querys using ?albumId=#
const getByAlbumId = (albumId) => {
    // Return the query result
    return axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => res.data)
        .catch(error => console.log(error));
  };

// Export all methods
module.exports = { getByAlbumId };