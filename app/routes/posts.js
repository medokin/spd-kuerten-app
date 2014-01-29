import rss from 'appkit/utils/rss';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return rss();
  }
});

export default PostsRoute;
