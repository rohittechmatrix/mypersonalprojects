var gameApp = angular.module('gameApp', []);
gameApp.controller('GameCtrl', function($scope, todosFactory , $interval) {
 

   $scope.questionNumber = 0;
    $scope.totalScore = 0;
    $scope.sample={};
    $scope.sample.selected = null;
    $scope.sample.submitted = false;
    $scope.wrong = false;
    $scope.correct = false;
    $scope.timeinSeconds = 0;
    $scope.completeQuiz = false;
    $scope.ecashArray = [50,75,100,125,150]
    $scope.correctAnswer = 0;
    
  todosFactory.getquestion().then(function(data) {
    $scope.set = data.data;
    $scope.sample = angular.copy($scope.set[$scope.questionNumber]);
  });
    
     
    $scope.changenext = function(){
         $scope.wrong = false;
        $scope.correct = false;
         $scope.questionNumber = $scope.questionNumber+1;
         if($scope.questionNumber <= $scope.set.length-1){
         $scope.sample = angular.copy($scope.set[$scope.questionNumber]);
          $scope.sample.selected = null;
         $scope.sample.submitted = false;
         }
        
        
    }
    $scope.changeprev = function(){
         $scope.questionNumber -=1;
         $scope.sample = angular.copy($scope.set[$scope.questionNumber]);
        
    }
    
    $scope.submitResponse = function(){
      if( $scope.sample.selected  == null){
         $scope.warning = true;
          setTimeout(function(){
               $scope.warning = false;;
          },2000);
          return false;
        }
        if($scope.sample.selected == $scope.sample.answer){
               $('#correctAnswer').modal({
    backdrop: 'static',
    keyboard: false 
});
             $scope.correctAnswer++;
            setTimeout(function(){
                 $scope.totalScore = $scope.totalScore+$scope.ecashArray[$scope.correctAnswer-1];
                $scope.$apply($scope.totalScore);
            },300);
                
             
        }else{
           $('#wrongAnswer').modal({
    backdrop: 'static',
    keyboard: false 
});
        }
           $scope.sample.submitted = true;
           $scope.changenext();
    }
    $scope.postData = function(){
        console.log(validateEmail($scope.emailCustomer))
        if($scope.emailCustomer != '' && $scope.emailCustomer != undefined && validateEmail($scope.emailCustomer)){
        var dataToPost = {};
        dataToPost.email = $scope.emailCustomer;
        dataToPost.ecashEarn = $scope.totalScore;
        dataToPost.timeTakenSeconds = $scope.timeinSeconds;
        dataToPost.exitQuestion = $scope.questionNumber;
        todosFactory.saveUser(dataToPost).then(function(data) {
          $scope.completeQuiz = true;
         $('#finishQuiz').modal('hide');
          $('#lastModal').modal({
            backdrop: 'static',
            keyboard: false 
        });
 
      });
        }else{
         $scope.emailError=true;
            
            setTimeout(function(){
                $scope.emailError=false; 
            },1500)
        }
    }
    
    $scope.quitQuiz = function(){
         if($scope.questionNumber <4){
        $('#confirmModal').modal({
    backdrop: 'static',
    keyboard: false 
});
              }else{
                  $scope.quitQuizLast();
              }
     }
   
    $scope.quitQuizLast = function(){
        
       
           $('#finishQuiz').modal({
                backdrop: 'static',
                keyboard: false 
                });
       
        
    }
    
       $interval(function () {
         $scope.timeinSeconds++;
     }, 1000);
   
    $('#myModal').modal({
    backdrop: 'static',
    keyboard: false 
});
 
    
    $scope.closeQuiz = function(){
        
        history.back();
        self.close();
    }
});


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}