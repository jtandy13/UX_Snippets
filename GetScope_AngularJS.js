/*******************************************************************************
Examples:

After inspecting an element in devtools, the element becomes available via $0

var scopeRef = angular.element($0).scope();

Use a CSS selector with document.querySelector()

var el = document.querySelector(".className");
OR SELECT BY ID
var el = document.querySelector("#idName");
OR SELECT BY HTML TAG NAME
var el = document.querySelector("htmlTagName");
OR SELECT BY ATTRIBUTE NAME
var el = document.querySelector("[attr]");
OR SELECT BY ATTRIBUTE NAME AND VALUE
var el = document.querySelector("[attr=val]");
*********************************************************************************/

var scopeRef = angular.element("yourElement").scope();
