import events from 'appkit/utils/events';

var EventRoute = Ember.Route.extend({
  model: function(params) {
    return events().then(function(events){
      var result = null;
      events.forEach(function(item){
        if(item.get('id') === params.event_id){
          console.log(item);
          result = item;
        }
      });

      return result;
    })
  }
});

export default EventRoute;
