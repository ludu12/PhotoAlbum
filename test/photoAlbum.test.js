// Chai is a BDD / TDD assertion library for Node.js
const expect = require('chai').expect;

// Nock is a HTTP mocking library
var nock = require('nock');

const { getByAlbumId } = require('../photoAlbum');

describe('Get By Id tests', () => {
  
  // Mocking up some respones
  beforeEach(() => {
    var albumIdRes = [
      {
        "albumId": 3,
        "id": 1,
        "title": "Title1",
        "url": "http://url1.com",
        "thumbnailUrl": "http://thumbnail1.com"
      },
      {
        "albumId": 3,
        "id": 2,
        "title": "Title2",
        "url": "http://url2.com",
        "thumbnailUrl": "http://thumbnail2.com"
      }
    ]
    nock('https://jsonplaceholder.typicode.com')
      .get('/photos?albumId=3')
      .reply(200, albumIdRes);
  });

  it('Should get photos by Album Id', () => {
    return getByAlbumId(3)
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        
        // Expect exactly 2
        expect(response.length).to.equal(2);

        // Verify results
        expect(response[0].albumId).to.equal(3);
        expect(response[0].id).to.equal(1);
        expect(response[0].url).to.equal('http://url1.com');
        expect(response[0].thumbnailUrl).to.equal('http://thumbnail1.com');

        expect(response[1].albumId).to.equal(3);
        expect(response[1].id).to.equal(2);
        expect(response[1].url).to.equal('http://url2.com');
        expect(response[1].thumbnailUrl).to.equal('http://thumbnail2.com');
      });
  });
}); 