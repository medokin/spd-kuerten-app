var PhotoModel = Ember.Object.extend({
  farm: null,
  server: null,
  id: null,
  secret: null,
  visible: false,

  url_q: function(){
    return 'http://farm'+this.get('farm')+'.staticflickr.com/'+this.get('server')+'/'+this.get('id')+'_'+this.get('secret')+'_q.jpg';
  }.property()

});

export default PhotoModel;
