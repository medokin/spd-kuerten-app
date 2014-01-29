import event from 'appkit/models/event';

export default function(){
  return new Ember.RSVP.Promise(function(resolve, reject) {
    var timeMin = moment().toISOString();
    var result = [];
    Ember.$.getJSON("https://www.googleapis.com/calendar/v3/calendars/spdkuerten%40gmail.com/events?orderBy=startTime&singleEvents=true&timeMin="+timeMin+"&key=AIzaSyBTRX_V1zOo18otU0zN48UIPXyVxR-yBl4").then(function(data){

      for (var index = 0; index < data.items.length; ++index) {
        var model = event.create(data.items[index]);
        result.push(model);
      }

      resolve(result);
    }, function(){
      reject('Cannot get items');
    });

  });
};
