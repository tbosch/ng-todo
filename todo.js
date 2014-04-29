var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('AppCtrl', function AppCtrl($scope) {

  // define userName model
  $scope.userName = 'איגור';


  // define usernames model
  var users = [
    {name: 'בראד :)'},
    {name: 'מישקו misko'},
    {name: 'ווייטה'},
    {name: 'brad green'}
  ];

  // publish it on scope
  $scope.users = users;


  // define items model
  var items = [
    {text: 'הפוך את AngularJS למצויינת!', done: false, minion: 'מישקו misko'},
    {text: 'עזור לכתוב את אפליקציית ה-Todo', done: true, minion: 'בראד :)'},
    {text: '2014 OKRs', done: true, minion: 'brad green'},
    {text: '2001: אודיסיאה בחלל', done: false, minion: 'מישקו misko'}
  ];


  // publish it on scope
  $scope.items = items;


  // computed property
  $scope.remaining = function() {
    return items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  };


  // event handler
  $scope.add = function(newItem) {
    var item = {
      text: newItem.text,
      minion: newItem.minion,
      done: false
    };
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
                '<span ng-dir="auto">{{userName}}</span>' +
              '</div>'
  };
});


todoApp.filter('avatarUrl', function() {
  return function(userName) {
    return 'img/' + userName.toLowerCase() + '.png';
  }
});
