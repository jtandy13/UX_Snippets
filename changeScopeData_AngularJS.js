/* **************************************************************
 * After you've got a reference to the scope of an element,
 * you can modify the data and/or functions.
 * 
 * The only thing to remember is to call the $apply() function
 * afterwards to apply what you've done to the page.
 * 
 * **************************************************************/

// 1. Select the element who's scope you need access to
// See the getScope_AngularJS snippet for help with selectors
var el = document.querySelector(".myInterestingElement");

// 2. Get a reference to the scope
var scopeRef = angular.element(el).scope();

// 3. Change any data value in the scope
scopeRef.data.question.views = 11;

// 4. Apply the change to the page
scopeRef.$apply();
