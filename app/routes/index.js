import rss from 'appkit/utils/rss';
import events from 'appkit/utils/events';
import photos from 'appkit/utils/photos';

export default Ember.Route.extend({
  model: function(params) {
    return Em.RSVP.hash({
      rss:  rss().then(function(data){
        return data.slice(0,3);
      }),
      events: events().then(function(data){
        return data.slice(0,3);
      })
    });
  },
});
