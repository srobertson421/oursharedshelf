Template.about.helpers({
  groupDesc: function() {
    var book = Session.get('monthlyBook');
    return book.groupDesc;
  }
});