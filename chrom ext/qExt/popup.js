var api="http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en"

//function  to generate new quote via fetch
function getQuoteFromApi(callback){
    fetch(api)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        //validate data is correct and in the right format

        callback(data); 
    })
    //error handling
    .catch(function(error){
        console.log(error);
    });
}
document.addEventListener('DOMContentLoaded',function(){
    var quote = document.getElementById('qoute');
    var auther = document.getElementById('auther');
    var button = document.getElementById('generate');

//FUNCTION TO WRITE DATA INTO OUR DOMELEMENTS
    function setDataToDOM(data){
        quote.innerHTML = data.quoteText;
        auther.innerHTML = data.quoteText;
    }
//get starting qoute
    getQuoteFromAPI(setDataToDOM);
    
//get quote on click
    button.addEventListener(click,function(){
        getQuoteFromApi(setDataToDOM);
    });

});