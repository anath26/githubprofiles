
      function addUser(username) {
        var url = 'https://api.github.com/users/' + username;
        $.get(url, function(user) {
          console.log('Adding a user');
          var newProfile = Mustache.render($('#profile-template').html(), user)

          $(newProfile).prependTo('.profile-container').hide().slideDown('slow');
        }).fail(function() {
          alert("Username not found");
        }).always(function() {
          $('#username').val('')
        });
      }

      $(document).ready(function(){
        var users = ['alexmakers', 'nkeszler', 'tomgroombridge', 'chrishill627'];

        users.forEach(function(username) {
          addUser(username);
        });

        $('#add_profile').on('submit', function(event) {
          event.preventDefault();
          addUser($('#username').val());
        });

        console.log('Add the on click event')
        console.log($('.close').length)

        $('.profile-container').on('click', '.close', function(event) {
          event.preventDefault();
          $(this).parent().slideUp('slow', function() {
            $(this).remove();
          });
        });
      })
    