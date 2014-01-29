import photo from 'appkit/models/photo';

export default function(){
  return new Ember.RSVP.Promise(function(resolve, reject) {
    var url = 'http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=e56456aee3b7c6519913177ce24e6ee3&user_id=34883092@N04&per_page=500&format=json&nojsoncallback=1';
    var result = [];
    return Ember.$.getJSON(url).then(function(data){
      var photos = data.photos.photo;

      for (var index = 0; index < photos.length; ++index) {
        var model = photo.create(photos[index]);
        result.push(model);
      }

      resolve(result);
    }, function(){
      reject('Cannot get Items');
    });
  });
};
