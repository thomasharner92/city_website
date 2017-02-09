/* JS file for working with AJAX (Pre Modules) */

function jQueryAjax() {
  
    // basic jQuery ajax method (takes url string to data, then settings object)
    $.ajax("data/cities.geojson", {
        dataType: "json",
        success: callback
    });
    
    
    // AJAX shorthand method to do the same thing as above
    /*var myData = $.getJSON("data/cities.geojson",callback);
    return myData;*/

};

// define callback function
function callback(response, status, jqXHRobject){
    var mydata = response;
    
    // pass data to another function
    nextFunction(mydata);

};

function nextFunction(data) {
    console.log(data);
}

$(document).ready(jQueryAjax);