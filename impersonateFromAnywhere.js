// Impersonate a user from anywhere in the platform
var username = "yourUser";

function reqListener () {
    location.reload();
}

function impersonate(username){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/now/ui/impersonate/" + username);
    oReq.send();
}

impersonate(username);
