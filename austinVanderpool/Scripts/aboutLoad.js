$(document).ready(function () {
    $('#compSci').click(function () {
        $('.bussContent').hide();
        $('.aboutWrapper').fadeOut("fast");
        $('.aboutWrapper').fadeIn("slow");
        $.ajax({
            url: "/Home/compSci",
            dataType: 'html',
            type: "GET",
            success: function (data) {
                $('.bussContent').html(data);
                $('.bussContent').fadeIn('slow');
            }
        });
    });

    $('#bioChem').click(function () {
        $('.bussContent').hide();
        $('.aboutWrapper').fadeOut("fast");
        $('.aboutWrapper').fadeIn("slow");
        $.ajax({
            url: "/Home/bioChem",
            dataType: 'html',
            type: "GET",
            success: function (data) {
                $('.bussContent').html(data);
                $('.bussContent').fadeIn('slow');
            }
        });
    });

})