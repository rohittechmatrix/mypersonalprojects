var gameApp = angular.module('gameApp', []);
gameApp.controller('GameCtrlResult', function($scope, todosFactory ) {
   todosFactory.getUser().then(function(data) {
    $scope.userList = data.data;
   });
 });

