var app = angular.module('chatroom');

app.service('parseService', function($http){
  //1) Here you'll need to create two methods. One called postData and the other called getData. 
    //A) On the lines below create a getData method. This method will retrieve data from the parse backend.
    //B) The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
    //C) Be sure to return whatever gets returned from $http so you can call .then in your controller.
    //D) On the line below create the postData method. This method will add data to the parse backend.
    //F) The url for the request needs to be 'https://api.parse.com/1/classes/chat'
    //E) Because we're making a POST request, we need a way to tell parse the data we want to give it, 
    //   in your $http call (along with url and method) has a data property which has a value that is equal 
    //   to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
    //F) Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), 
    //   you can then use .then in your controller.
  
  //postData method here
   
  this.postData = function(objText) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/chat',
      data: objText
    });
  }
  
  //getData method here
  
  this.getData = function() {
    return $http({ 
      method: 'GET',
      url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
    }).then(function(retrieveTheObjectFromtheUrl) {
      return retrieveTheObjectFromtheUrl.data.results;  
    })
  };

  

});