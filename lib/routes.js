Router.configure({
	layoutTemplate: 'main-layout'
});

Router.route('/', function() {
	this.render('home');
}, {
	name: 'home'
});

Router.route('/about', function() {
  this.render('about');
}, {
  name: 'about'
});

Router.route('/discussions', function() {
  this.render('discussionBoard');
}, {
  name: 'discussionBoard'
});