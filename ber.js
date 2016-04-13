/**
 Bercjs JAVASCRIPT library V 1.0
 Copyright 2016 Mohamed Mbarki


 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php
*/


// Check if there is existing Berc Object is defined otherwise define new object
// Berc is the core namespace to encapsulate methods, functions, variables, and objects.
(function(window){
    //I recommend this
    'use strict';


var Berc = window.Berc = Berc|| {};

Berc.VERSION = "1.0";


Berc.$ = window.jQuery || window.$;


// Core Objects

Berc.App = {};
Berc.Utilities = {};
Berc.View = {};


//Create a new Berc Application 

Berc.App.new = {
	Controller : {
         
	},
	Model : {

	},
	View : {

	}
}


/*
* Implementing the Model
*
*/



var Model = Berc.Model = function(name){
  this.name = name;

  this.gather = function(){

  }
  this.process = function(){

  }
  this.send = function(){

  }
};

})(window);
