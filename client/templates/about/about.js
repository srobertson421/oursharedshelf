Template.about.onCreated(function() {
  Session.set('previousUrl', Session.get('currentUrl'));
  Session.set('currentUrl', '/about');
});

Template.about.helpers({
  groupDesc: function() {
    if (Session.get('monthlyBook')) {
      var book = Session.get('monthlyBook');
      return book.groupDesc;
    } else {
      return false;
    }
  }
});