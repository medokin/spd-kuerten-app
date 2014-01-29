import rss from 'appkit/utils/rss';

var PostRoute = Ember.Route.extend({
  model: function(params) {
    return rss().then(function(feeds){
      var result = null;
      feeds.forEach(function(item){
        if(item.get('id') === params.post_id){
          result = item;
        }
      });

      return result;
    })
  }
});

export default PostRoute;
