var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('AppCtrl', function AppCtrl($scope) {

  // define userName model


  // define items model


  // publish it on scope



  // computed property
  $scope.remaining = function() {
    return items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  };


  // event handler
  $scope.add = function(newItem) {
    var item = {text: newItem.text, done: false};
    items.push(item);
    newItem.text = '';
  };


  // event handler
  $scope.archive = function() {
    items = $scope.items = items.filter(function(item) {
      return !item.done;
    });
  };
});


todoApp.directive('avatar', function() {
  return {
    restrict: 'EA',
    scope: {
      userName: '='
    },
    template: '<div class="avatar label label-info">' +
                '<img ng-src="{{userName | avatarUrl}}">' +
                '<span>{{userName}}</span>' +
              '</div>'
  };
});


todoApp.filter('avatarUrl', function() {
  return function(userName) {
    return 'img/' + userName.toLowerCase() + '.png';
  }
});


/*

todoApp.controller('AppCtrl', function($scope, Item) {

  // fetch model
  var items = $scope.items = Item.query();

  // computed property
  $scope.remaining = function() {
    return items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  };


  // event handler
  $scope.add = function(newItem) {
    var item = new Item({text: newItem.text});
    items.push(item);
    newItem.text = '';

    // save to mongolab
    item.$save();
  };


  // event handler
  $scope.archive = function() {
    items = $scope.items = items.filter(function(item) {
      if (item.done) {
        item.$remove();
        return false;
      }
      return true;
    });
  };
});


todoApp.constant('apiKey', '4fc27c99e4b0401bdbfd1741');

todoApp.factory('Item', function($resource, apiKey) {
  var Item = $resource('http://offline.api.mongolab.com/api/1/databases/ng-todo/collections/items/:id', {
    apiKey: apiKey
  }, {
    update: {method: 'PUT'}
  });

  Item.prototype.$remove = function() {
    Item.remove({id: this._id.$oid});
  };

  Item.prototype.$update = function() {
    return Item.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
  };

  Item.prototype.done = false;

  return Item;
});

*/

/*

 todoApp.config(function($routeProvider) {
  $routeProvider.
      when('/', {controller: 'AppCtrl', template: 'todo.html'}).
      when('/hello', {template: 'hello.html'}).
      otherwise({redirectTo: '/'});
});



 <nav>
 [<a href="#/">Todo</a>] [<a href="#/hello">hello</a>]
 </nav>

 <ng-view></ng-view>

*/