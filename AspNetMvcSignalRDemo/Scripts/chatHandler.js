$(function () {
    //This is a reference to the automatically generated proxy for the chatHub. Notice the casing.  
    var chatConnection = $.connection.chatHub;

    //We are adding a method to the chatConnection.client proxy so that it is available later.
    chatConnection.client.addMessage = function (name, message) {
        //Add the message to the page. 
        $('#discussionList').append('<li class="list-group-item"><strong>' + name
            + '</strong>: ' + message + '</li>');
    };

    //When the page loads, we will prompt the user to enter their name and then store that value in the 
    //hidden field so we can grab it later.
    $('#displayName').val(prompt('Enter your name:', ''));

    //Set initial focus to message input box.  
    $('#messageText').focus();

    //Start the connection.
    $.connection.hub.start().done(function () {
        $('#sendMessage').click(function () {
            //Call the Send method on the hub. Notice the casing of send. On the server, it is Send and on the client, send. 
            chatConnection.server.send($('#displayName').val(), $('#messageText').val());

            // Clear text box and reset focus for next comment.
            $('#messageText').val('').focus();
        });
    });
});

// This optional function html-encodes messages for display in the page.
function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}