$(document).ready(function() {
	var homePage = new HomePage();
	homePage.addEvents();
});

var HomePage = function() {
	var api = 'http://localhost:9000/api/';
	var findAllChats = api + 'chats';
	var findAllMessages = api + 'chats/:id/' + 'messages';
	var postMessages = api + 'chats/:id/' + 'messages';

	$.get({
		url: findAllChats,
		success: function(data) {
			$.each(data, function(key, chat) {
				var link = '<a data-chat-id="'+chat.id+'" class="list-group-item">'+chat.name+'</a>';
				$('#chats').append(link);
			});
			getChatMessages(data[0].id);
		}
	})
	
	this.addEvents = function() {
		$('.list-group').on('click', 'a[data-chat-id]', function(e) {
			var id = $(e.target).attr('data-chat-id');
			getChatMessages(id);
			return false;
		});

		$('#send-message').click(function(e) {
			var text = $('#new-message').val();
			$('#new-message').val('');
			var chatId = $('a.active').attr('data-chat-id');
			
			if(text != null) {
				$.post({
					url: postMessages.replace(':id', chatId),
					data: JSON.stringify({ text: text }),
					contentType: 'application/json',
					statusCode: {
						201: function(data) {
							addMessage(data);						
						},
						500: function(data) {
							console.log('deeu erro');
						}
					}
				});
			}
		});
	}

	var getChatMessages = function(id) {
		$.get({
			url: findAllMessages.replace(':id', id),
			success: function(data) {
				$('.chat-message').remove();
				$.each(data, function(key, message) {
					addMessage(message);
				});
			}
		});
		$('.active').attr('class', 'list-group-item');
		$('a[data-chat-id='+id+']').attr('class','list-group-item active');
	}

	var addMessage = function(message) {
		var m = '<span class="author">'+message.user.name+': </span>';
		m += 	'<span class="date">'+message.createdAt+'</span>'
		m += 	'<span class="text">' +message.text+ '</span>';
		var d = '<div class="chat-message">'+m+'</div>'
		$('#messages').append(d);
	}
}