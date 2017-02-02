$(document).ready(() => {

  $('person-form').on('submit', function() {

    var name = $('person-name');
    var interests = $('person-interests');
    var person = {
      name: name.val(),
      interests: interests.val()
    }

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

});