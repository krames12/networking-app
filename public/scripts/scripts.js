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
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function() {
    var item = $(this).text().replace(/ /g, "-");
    console.log(item);
    $.ajax({
      type: 'DELETE',
      url: '/people/' + item,
      success: function(data){
        location.reload();
      }
    });
  });

});