import events from 'appkit/utils/events';

var EventsRoute = Ember.Route.extend({
  model: function(){
    return events();
  }
});

export default EventsRoute;
