$(document).ready(() => {

  $('form').on('submit', function() {

    var name = $('#person-name');
    var interests = $('#person-interests');
    var person = {
      name: name.val(),
      interests: interests.val()
    }

    console.log("person", person);

    $.ajax({
      type: 'POST',
      url: '/people',
      data: person,
      success: function(data) {
        console.log("data", data);
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function() {
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data){
        location.reload();
      }
    });
  });

});