const expect = require('chai').expect;
var nock = require('nock');
const { getByAlbumId } = require('../photoAlbum');

var albumIdRes = [
  {
    'albumId': 3,
    'id': 1,
    'title': 'Title1',
    'url': 'http://url1.com',
    'thumbnailUrl': 'http://thumbnail1.com'
  },
  {
    'albumId': 3,
    'id': 2,
    'title': 'Title2',
    'url': 'http://url2.com',
    'thumbnailUrl': 'http://thumbnail2.com'
  }
]

describe('Get By Id tests', () => {
  beforeEach(() => {
    // Success mock
    nock('https://jsonplaceholder.typicode.com')
      .get('/photos?albumId=3')
      .reply(200, albumIdRes);

    // Failure mock
    nock('https://jsonplaceholder.typicode.com')
      .get('/photos?albumId=-1')
      .replyWithError('ERROR!');
  });

  it('Should get photos by Album Id', () => {
    return getByAlbumId(3)
      .then(response => {
        expect(response).to.deep.equal(albumIdRes);
      });
  });

  it('Should report error when there is one', () => {
    return getByAlbumId(-1);
    expect( console.log.calledOnce ).to.be.true;
  });
});
