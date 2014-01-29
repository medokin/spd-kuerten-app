var r = require('request');

module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		// Return fixture data for '/api/posts/:id'
		server.get('/news', function(req, res) {
      r.get('http://spd-kuerten.de/feed/', {timeout: 5000}).pipe(res);
		});

	});

};