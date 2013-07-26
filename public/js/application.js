$(document).ready(function(){
  $('#get_color').on('click', function(event){
    event.preventDefault();
    event.stopPropagation();

    var url = ('/color');

    $.post(url, function(response){
      console.log(response);

      var color = response.color;
      var cell = response.cell;

      $('#color_me li:nth-child('+cell+')').css('background-color', color);
    }, "json");
  });
});

// .css()
