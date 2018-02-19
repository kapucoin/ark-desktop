'use strict'

describe('feedService', function () {
  let feedService

  beforeEach(() => {
    module('arkclient.services')

    inject($injector => {
      feedService = $injector.get('feedService')
    })
  })

  describe('fetchBlogEntries', function () {
    it('fetches and parses the KAPU.one feed URL', function () {
      const stub = sinon.stub(feedService, 'fetchAndParse').resolves('OK')
      feedService.fetchBlogEntries()
      expect(stub.firstCall.args[0]).to.eql('https://medium.com/feed/kapucoin')
    })
  })
})
