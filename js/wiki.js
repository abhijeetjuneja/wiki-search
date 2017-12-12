var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";
  
$(document).ready(function(){
     window.onload = function() {
 document.getElementById("input").focus();
};  
     
        $('#btn').on("click",function() {
             var url1 = "https://en.wikipedia.org/wiki/Special:Random";
       
    window.open(url1,"mywindow"); 
             
            });

    $('#search').on("click",function() {
          $("#display-result").empty(); 
          console.log(apiURL);
      $.getJSON(apiURL,{
        action: 'query',
        format: 'json',
        inprop: "url",
        formatversion: 2,
        generator: 'search',
        gsrsearch: $("input").val(),
        gsrwhat: "text",
        prop: 'extracts|info',
        exsentences: 3,
        exintro: "",
        explaintext: "",        
        exlimit: 20,
      },function(response) {
        console.log("hi");
      response.query.pages.forEach(function(resp) {
          $('#display-result').append(
            "<a href='" + resp.fullurl + "' target= '_blank'><div id='result' class='results'><h3>" + resp.title + "</h3><p = class='extract'>" + resp.extract + "</p></div>");
        })
      });
      
      
        });       
            });
 
 
     
      
