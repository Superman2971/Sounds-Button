var soundApp = angular.module("soundApp", []);

soundApp.controller("soundController", function($scope){

  $scope.audio = [
  {name:"TD4W", location:"audio/td4w.mp3"},
  {name:"300", location:"audio/300.mp3"},
  {name:"Battlestar Galactic", location:"audio/bsg.mp3"},
  {name:"Finding Nemo", location:"audio/nemo.mp3"},
  {name:"Portal 2", location:"audio/portal2.mp3"},
  {name:"Hitchikers Guide to the Galaxy", location:"audio/galaxy.mp3"}
  ];

  $scope.myAudio = $scope.audio[0];

  $scope.play = function(myAudio){
    var snd = new Audio(myAudio.location)
    snd.play();
  }
});