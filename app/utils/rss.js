import feed from 'appkit/models/feed';

export default function(){
  return new Ember.RSVP.Promise(function(resolve, reject) {

    var url = 'http://spd-kuerten.de/feed/';
    if(window.ENV.plattform === 'browser'){
      url = '/api/news';
    }

    var result = [];
    Ember.$.get(url).then(function(data){

      $(data).find('item').each(function(){
        var el = $(this);

        var item = feed.create({
          id: S(el.find('title:first').text()).slugify().s,
          title: el.find('title:first').text(),
          creator: el.find('creator:first').text(),
          date: moment(el.find('pubDate').text()).format(),
          thumbnail: el.find('thumbnail:first').attr('url'),
          content: S(el.find('encoded:first').text()).stripTags('img').s
        });

        result.push(item);

      });

      resolve(result);
    }, function(){
      reject("Cannot get items");
    });

  });
};
