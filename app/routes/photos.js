import photos from 'appkit/utils/photos';

var PhotosRoute = Ember.Route.extend({
  model: function() {
    return photos();
  }
});

export default PhotosRoute;
