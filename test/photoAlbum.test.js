var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon'),
    nock = require('nock');

chai.use(sinonChai);

const { getByAlbumId } = require('../photoAlbum');

describe('Get By Id tests', () => {
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
  
  beforeEach(() => {
    sinon.spy(console, 'log');
    // Success mock
    nock('https://jsonplaceholder.typicode.com')
      .get('/photos?albumId=3')
      .reply(200, albumIdRes);

    // Failure mock
    nock('https://jsonplaceholder.typicode.com')
      .get('/photos?albumId=-1')
      .replyWithError('ERROR!');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('Should get photos by Album Id', () => {
    getByAlbumId(3)
      .then(response => {
        expect(response).to.deep.equal(albumIdRes);
      });
  });

  it('Should report error when there is one', () => {
    getByAlbumId(-1).then(() => {expect(console.log).to.be.called;});
  });
});
