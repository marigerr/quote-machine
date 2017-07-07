
$(document).ready(function () {
  getNewQuote();
  $("#new-quote").on("click", getNewQuote);
  // $("#tweet-quote").on("click", tweetQuote);
  console.log(find("#tweet-quote").onclick);

  // var elem = document.getElementById("tweet-quote");
  // var events = (jQuery._data || jQuery.data)(elem, 'events');
  // console.log(events);

  // console.log(document.getElementById("tweet-quote"));
  // jQuery( document.getElementById("tweet-quote") ).data( "events" );
  // console.log(document.getElementById("#tweet-quote").onclick);

  //$("#tweet-quote").hide();
});

var getNewQuote = function () {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function (json) {
    console.log(json.quoteText.length);
    $("#text").html(json.quoteText);
    if (json.quoteAuthor == "") {
      $("#author").html("Anonymous");
    } else {
      $("#author").html(json.quoteAuthor);
      json.quoteAuthor.split(' ').join('_');
      $("#author").attr("href", "https://en.wikipedia.org/wiki/" + json.quoteAuthor.split(' ').join('_'));
    }

    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet' + '?text=' + json.quoteText + ' - ' + json.quoteAuthor)
    $("#wikiBtn").attr("href", "https://en.wikipedia.org/wiki/" + json.quoteAuthor.split(' ').join('_'));
  });

};

// var tweetQuote = function(){
//   var quote = $('#text').html();
//   var author = $('#author').html();
//   window.open('https://twitter.com/intent/tweet' + '?text=' + quote + ' - ' + author, '_blank');
// };



//var onSuccess = function(json) {
//$("#text").html(JSON.stringify(json));  
//};

//alert("button clicked");
//$("#text").empty();
//alert("after");
//$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
//$("#text").html(JSON.stringify(json)); 
//$("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
//});  