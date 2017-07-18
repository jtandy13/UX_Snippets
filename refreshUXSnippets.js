function() {
    var scripts;
    var scriptNames = [];
    function nameListener () {
        scripts = JSON.parse(this.responseText);
        for(var script of scripts) {
            if (script.name != "LICENSE" && script.name != "README.md") {
                    scriptNames.push(script.name);
            }
        }
        getScripts(scriptNames);
    }



    function contentListener () {
    var scriptBody = JSON.parse(this.responseText);
    var scriptName = scriptBody.name;
    scriptBody = window.atob(scriptBody.content);
    importSnippet(scriptBody, scriptName);
    }

    var nameReq = new XMLHttpRequest();
    nameReq.addEventListener("load", nameListener);
    nameReq.open("GET", "https://api.github.com/repos/jtandy13/UX_Snippets/contents/");
    nameReq.send();

    function getScripts(names) {
        for (var name of names) {
            var contentReq = new XMLHttpRequest();
            contentReq.addEventListener("load", contentListener);
            contentReq.open("GET", "https://api.github.com/repos/jtandy13/UX_Snippets/contents/" + name);
            contentReq.send();
        }
    }

    function getNextId(snippets) {
        var snipArray = snippets;
        if (snipArray.length === 0){
            return "1";
        } else {
            var ids = [];
            for(let snip of snipArray) {
                ids.push(parseInt(snip.id));
            }
            //console.log(ids);
            return ((Math.max.apply(Math, ids)) + 1).toString();
        }
    }

    // Getting snippets
    function importSnippet(script, scriptName) {
        var snipArray = [];
        InspectorFrontendHost.getPreferences(function(result) {
            snipArray = JSON.parse(result.scriptSnippets);
            getNextId(snipArray);

            var insertedSnip = {
                content: script,
                id: getNextId(snipArray),
                name: scriptName
            }

            snipArray.push(insertedSnip);

            // Setting snippets
            InspectorFrontendHost.setPreference("scriptSnippets", JSON.stringify(snipArray));
        })
    }
})()
