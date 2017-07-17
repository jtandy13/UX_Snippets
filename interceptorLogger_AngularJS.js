/* Test Update
 * Log all AngularJS $http request and response objects to the console
 * 1. Find the spInspector code.
 * 2. Replace the "request" function with the new "request" function below
 * 3. Save the file.
 * 4. Replace the "response" function with the new "response" function below
 * 5. Save the file.
 */

function request(config) {
    if (!ignored(config.url)) {
        console.log(config);
        console.log("Request for: " + config.url);
        config.id = createUid();
        activeRequests.push(config.id);
        $rootScope.$broadcast('sp_loading_indicator', true);
        $rootScope.loadingIndicator = true;
    }
    return config;
}

function response(response) {
    if(!ignored(response.config.url)) {
        console.log(response);
        console.log("Response to: " + response.config.url);
    }
    if (response.config.id) {
        done(response.config.id);
    }
    return response;
}
