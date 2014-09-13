'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://news-site-angular.firebaseio.com/posts/:id.json');
});
