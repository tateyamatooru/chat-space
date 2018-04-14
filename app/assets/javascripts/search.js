$(function() {
  var search_name = $("#user-search-result");

  function appendUser(user)  {
      var html =`<div class="chat-group-form__field--right--search">
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>
               </div>`
    search_name.append(html);
  }

  function groupUser(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                        <input name='group[user_ids][]' type='hidden' value='${id}'>
                        <p class='chat-group-user__name'>${name}</p>
                        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                      </div>`
     return html;
    }

  $("#user-search-field").on("keyup ", function() {
    var input = $("#user-search-field").val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      contentType: false,
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
        appendUser(user);
          console.log(3);
        });
      }
      if (users.length === 0) {
       $(":text").append("一致するユーザーはいませんでした");
      };
    });
  });
  $(document).on('click', '.chat-group-user__btn--add',function(){
    var user_id = $(this).data('user-id')
    var name = $(this).data('user-name')
    $('#chat-group-users').append(groupUser(user_id, name));
    $(this).parent().remove();
  });
  $(document).on('click', '.chat-group-user__btn--remove',function(){
    $('#chat-group-user-8').remove();
  });
});