var API_KEY = Meteor.settings.goodReads.api_key;
var SECRET = Meteor.settings.goodReads.secret;

Meteor.methods({
  getMonthlyBook: function() {

    var apiCall = function(callback) {
      HTTP.call('GET', 'https://www.goodreads.com/group/show/179584.xml', {
        params: {
          sort: 'title',
          order: 'a',
          key: API_KEY
        }
      }, function(error, response) {
        if (error) {
          callback(error, null);
        }

        xml2js.parseString(response.content, function(parseError, parseResult) {
          callback(null, parseResult);
        });
      });
    }

    var asyncCall = Meteor.wrapAsync(apiCall);
    var result = asyncCall();
    return result;
  },

  getBookDesc: function(bookId) {
    var apiCall = function(callback) {
      HTTP.call('GET', 'https://www.goodreads.com/book/show.xml', {
        params: {
          format: 'xml',
          key: API_KEY,
          id: bookId
        }
      }, function(error, response) {
        if (error) {
          callback(error, null);
        }

        xml2js.parseString(response.content, function(parseError, parseResult) {
          callback(null, parseResult);
        });
      });
    }

    var asyncCall = Meteor.wrapAsync(apiCall);
    var result = asyncCall();
    return result;
  }
});