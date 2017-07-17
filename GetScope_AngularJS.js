/*******************************************************************************
Gets a reference to the scope of the selected element. Allows you to inspect and 
make changes to the scope data and functions, 

Examples:

Selecting and element:
-----------------------

After inspecting an element in devtools, the element becomes available via $0

var scopeRef = angular.element($0).scope();

You can use a CSS selector with document.querySelector()
Selecting by class name:
var el = document.querySelector(".className");

Selecting by id:
var el = document.querySelector("#idName");

Selecting by HTML tag name:
var el = document.querySelector("htmlTagName");

Selecting by attribute name:
var el = document.querySelector("[attr]");

Selecting by attribute name and value:
var el = document.querySelector("[attr=val]");
*********************************************************************************/

var scopeRef = angular.element("yourElement").scope();
