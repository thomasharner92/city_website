/* JS file for working with AJAX (Pre Modules) */

function jsAjax() {
  
    // Create the request
    var ajaxRequest = new XMLHttpRequest(); // set up comm with the server
    
    // Create event handler to send received data to callback function
    ajaxRequest.onreadystatechange = function() {
        console.log("readyState: ", ajaxRequest.readyState);
        if (ajaxRequest.readyState == 4){
            callback(ajaxRequest.response);
        };
    };
    
    // Open Server CONN (Get geojson from the sever)
    ajaxRequest.open('GET','data/cities.geojson',true)
    
    // Set Response data type (what type of data we expect to receive)
    ajaxRequest.responseType = "json";
    
    ajaxRequest.send();

};

function callback(response){
    //console.log(response);
    console.log(JSON.stringify(response));
};

window.onload = jsAjax();