Template.home.onCreated(function() {
  Session.set('previousUrl', '');
  Session.set('currentUrl', '/');

  if (!Session.get('monthlyBook')) {
    Meteor.call('getMonthlyBook', function(error, result) {
      //console.log(result);
      var currentBook = result.GoodreadsResponse.group[0].currently_reading[0].group_book[0].book[0]
      var discussionBoards = result.GoodreadsResponse.group[0].folders[0].folder;

      Meteor.call('getBookDesc', currentBook.id[0]._, function(descError, descResult) {
        var descBook = descResult.GoodreadsResponse.book[0];
        Session.set('monthlyBook', {
          title: currentBook.title[0],
          author: currentBook.author[0].name[0],
          description: descBook.description[0],
          image_url: 'https://d.gr-assets.com/books/1386925078l/' + currentBook.id[0]._ + '.jpg',
          goodreadsLink: descBook.link[0],
          groupDesc: result.GoodreadsResponse.group[0].description[0],
          discussionBoards: discussionBoards
        });

        Session.set('isLoaded', true);
        console.log(Session.get('monthlyBook'));
      });
    });
  }
});

Template.home.helpers({
  isLoaded: function() {
    return Session.get('isLoaded');
  },

  currentPage: function() {
    if(Session.get('isLoaded')) {
      return 'currentBook';
    } else {
      return 'loading';
    }
  }
});

Template.home.events({});