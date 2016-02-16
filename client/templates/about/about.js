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