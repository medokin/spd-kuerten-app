var PhotosController = Ember.ArrayController.extend({
  modelDidChange: function(){
    this.send('more');
    console.log('modelDidChange');
  }.observes('model'),

  visibleCount: 0,

  moreAvailable: function(){
    if(this.get('visibleCount') >= this.get('model').length){
      return false;
    }

    return true;
  }.property('model', 'visibleCount'),

  actions: {
    more: function(){
      var count = this.get('visibleCount');
      var newCount = count + 15;
      this.get('model').slice(count, newCount).forEach(function(item){
        item.set('visible', true);
      });

      this.set('visibleCount', newCount);
    }
  }
});

export default PhotosController;
