$(document).ready(function() {
    $('#mail').click(function(){
        $('#form').attr('action',
                       'mailto:sipple3@gmail.com?subject=' +
                       $('#email').val() + '&body=' + $('#message').val());
        $('#form').submit();
        console.log($('#message').val())
    });
});