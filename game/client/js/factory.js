gameApp.factory('todosFactory', function($http) {
  var _todoService = {};
 

   _todoService.saveUser = function(user) {
    return $http.post('/api/user', user);
  };

  
_todoService.getquestion = function() {
    return $http.get('/api/question');
  };
    
  _todoService.getUser = function() {
    return $http.get('/api/getUser');
  };


  return _todoService;
});