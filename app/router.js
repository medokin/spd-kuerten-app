var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('posts');

  this.resource('post', {path: '/post/:post_id'});
  this.resource('event', {path: '/event/:event_id'});

  this.resource('events');
  this.resource('photos');
});

export default Router;
