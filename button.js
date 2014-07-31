var soundApp = angular.module("soundApp", []);

soundApp.controller("soundController", function($scope){

  var snd = new Audio("td4w.mp3");

  $scope.td4w = function(){
    snd = new Audio("td4w.mp3");
  }

  $scope.the300 = function(){
    snd = new Audio("300.mp3");
  }

  $scope.bsg = function(){
    snd = new Audio("bsg.mp3");
  }

  $scope.nemo = function(){
    snd = new Audio("nemo.mp3");
  }

  $scope.portal2 = function(){
    snd = new Audio("portal2.mp3");
  }

  $scope.play = function(){
    snd.play();
  }
});