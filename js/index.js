// use wiki 

// notes for tommorrow  currently have the input going to the function on return press/
// todo  put text input into api and get a JSON object back and sort through the object and display the articles

function searchWiki(subject) {

  //var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + subject + "&namespace=0&limit=10";
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + subject + "&format=json&callback=?";
  $.ajax({
    url: url,
    type: 'GET',
    contentType: "application/json; charset=uft-8",
    async: false,
    dataType: "json",
    success: function(data, status, jqXHR) {
      $("#output").html("words mean success ");
      for (var i = 0; i < data[1].length; i++) {
        $("#output").prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
      }
    }
  });
}