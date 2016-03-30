var colors = ['#474e5d','#1abc9c', '#58ACFA','#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


function getNew(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    headers : {
      "X-Mashape-Key" : "lYZbaHi6fgmshGPIye5ZHzDFQ1u6p1vEXPsjsnKg1iZYfM1R9O",
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function(stuff){   
      var json = JSON.parse(stuff);
      $("#text").text(json.quote);
      $("#author").text(json.author);
      $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + json.quote + '" -' + json.author));
      
      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
  
}
$(document).ready(function() {
  getNew()
  $("#new-quote").on("click", getNew);
});