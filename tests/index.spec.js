/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper Lib', () => {
  let stubbedFetch;
  //let promise;

  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch');
    //promise = stubbedFetch.resolves({ json: () => ({ }) });
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  it('should create instance of spotifywrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla',
    });

    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'blabla',
    });

    expect(spotify.token).to.be.equal('blabla');
  });

  describe('request method', () => {
    it('should have request method', () => {
      const spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });
      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the right url passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });
      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with the right headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      const headers = {
        headers: {
          Authorization: 'Bearer foo',
        },
      };

      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
