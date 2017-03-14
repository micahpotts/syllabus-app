// Adding Angular
var app = angular.module("bigBear", []);

app.factory('posts', [function() {
  var o = {
    posts: [
      {title: 'GitHub Basics', week: 1},
      {title: 'JavaScript Loops, Arrays & Objects', week: 1},
      {title: 'jQuery Basics', week: 2},
      {title: 'Using jQuery Plugins', week: 3},
      {title: 'Interactive Webpages with JavaScript', week: 3},
    ]
  };
  return o;
}])

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({title: $scope.title, week: $scope.week});
    $scope.title = '';
    $scope.week = '';
    };

    $scope.weekChange = function(post) {
      post.week = Math.min(12, parseInt(post.week) + 1);
    };
  }
]);

// app.config([
// '$stateProvider',
// '$urlRouterProvider',
// function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//     .state('home', {
//       url: '/home',
//       templateUrl: '/home.html',
//       controller: 'MainCtrl'
//     });
//
//   $urlRouterProvider.otherwise('home');
// }
// ]);

app.directive('clickFunctions', function() {
  require("jsdom").env("", function(err, window) {
      if (err) {
          console.error(err);
          return;
      }

      var $ = require("jquery")(window);

      // Change class of clicked items to disabled (make strikethrough)
      $( ".list-group-item" ).click(function() {
        $( this ).toggleClass( "disabled" );
      });

      // Double click to edit titles
      var oriVal;
      $("#parentBtn").on('dblclick', 'button', function () {
          oriVal = $(this).text();
          $(this).text("");
          $("<input type='text'>").appendTo(this).focus();
      });
      $("#parentBtn").on('focusout', 'button > input', function () {
          var $this = $(this);
          $this.parent().text($this.val() || oriVal); // Use current or original val.
          $this.remove();                      // Don't just hide, remove the element.
      });

  });
});
