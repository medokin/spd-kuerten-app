var EventModel = Ember.Object.extend({
  id: null,
  summary: null,
  start: {
    date: null,
    dateTime: null
  },
  location: null
});

export default EventModel;
