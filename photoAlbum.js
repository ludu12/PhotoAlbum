
class PhotoAlbum{

    constructor(){
        this.albumId = -1;
        this.photos = []; 
    }


}

const query = (albumId) => {
    // Define search criteria. The search here is case-insensitive and inexact.
    const search = new RegExp(name, 'i');
    Contact.find({$or: [{firstname: search }, {lastname: search }]})
    .exec((err, contact) => {
      assert.equal(null, err);
      console.info(contact);
      console.info(`${contact.length} matches`);
      db.disconnect();
    });
  };




// Export all methods
module.exports = { query };