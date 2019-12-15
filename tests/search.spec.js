/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ }) });
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {

    it('should exists the searchAlbums method', () => {
      expect(spotify.search.searchAlbums).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(spotify.search.searchArtists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(spotify.search.searchTracks).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(spotify.search.searchPlaylists).to.exist;
    });
  });

  describe('search artist', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct URL', () => {
      const artists = spotify.search.searchArtists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?=Incubus&type=artist');
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct URL', () => {
      const albums = spotify.search.searchAlbums('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?=Incubus&type=album');
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct URL', () => {
      const tracks = spotify.search.searchTracks('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?=Incubus&type=track');
    });
  });

  describe('search playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct URL', () => {
      const playlists = spotify.search.searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?=Incubus&type=playlist');
    });
  });
});
